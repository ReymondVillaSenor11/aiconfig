import _ from "lodash";
import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";
import { AIConfigRuntime } from "./config";
import { InferenceSettings, ModelMetadata } from "../types";
import { JSONObject } from "../common";

export function getAPIKeyFromEnv(apiKeyName: string) {
  const apiKeyValue = process.env[apiKeyName];
  if (!apiKeyValue) {
    throw new Error(`Missing API key ${apiKeyName} in environment`);
  }
  return apiKeyValue;
}

/**
 *  Extract inference settings with overrides based on inference settings.
 *
 *    This function takes the inference settings and a model ID and returns a subset
 *    of inference settings that have been overridden by model-specific settings. It
 *    compares the provided settings with global settings, and returns only those that
 *    differ or have no corresponding global setting.
 * @param configRuntime The AIConfigRuntime that the prompt belongs to.
 * @param inferenceSettings The model settings from the input data.
 * @param modelName The model ID of the prompt.
 * @returns The model settings from the input data.
 */
export function extractOverrideSettings(
  configRuntime: AIConfigRuntime,
  inferenceSettings: InferenceSettings,
  modelName: string
) {
  let modelMetadata: ModelMetadata | string;
  const globalModelSettings: InferenceSettings = {
    ...(configRuntime.getGlobalSettings(modelName) ?? {}),
  };
  inferenceSettings = { ...(inferenceSettings ?? {}) };

  if (globalModelSettings != null) {
    // Check if the model settings from the input data are the same as the global model settings

    // Compute the difference between the global model settings and the model settings from the input data
    // If there is a difference, then we need to add the different model settings as overrides on the prompt's metadata
    const keys = _.union(
      _.keys(globalModelSettings),
      _.keys(inferenceSettings)
    );
    const overrides = _.reduce(
      keys,
      (result: JSONObject, key) => {
        if (!_.isEqual(globalModelSettings[key], inferenceSettings[key])) {
          result[key] = inferenceSettings[key];
        }
        return result;
      },
      {}
    );

    return overrides;
  }
  return inferenceSettings;
}

/**
 *  Check if a file is valid YAML.
 *
 *    This function checks if a file is valid YAML by trying to parse it as YAML.
 * @param filePath The path to the file to check.
 * @returns True if the file is valid YAML, false otherwise.
 */
export function yamlToJson(filePath: string) {
  // Check file extension
  const ext = path.extname(filePath);
  if (ext !== ".yaml" && ext !== ".yml") {
    return null;
  }

  // Try to parse it as YAML
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return yaml.load(fileContents);
  } catch {
    // If parsing throws an error, it's not valid YAML
    return null;
  }
}
