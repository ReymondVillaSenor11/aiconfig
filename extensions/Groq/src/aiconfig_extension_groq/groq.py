from groq import Groq
from aiconfig.default_parsers.openai import DefaultOpenAIParser

import os

class GroqOpenAIParser(DefaultOpenAIParser):
    def __init__(self, model: str):
        super().__init__(model_id = model)

        # Deployment is a custom name for the specific model they want to use
        # when registering the Groq model parser. See the cookbook for reference
        self.model = model

    async def deserialize(self, *args, **kwargs):
        # Logic doesn't depend on input, pass it forward to the openai model parser deserialize
        openai_deserialized_params = await super().deserialize(*args, **kwargs)
        openai_deserialized_params["model"] = self.model
        return openai_deserialized_params

    def initialize_openai_client(self) -> None:
        # Initialize Groq Client
        self.client = Groq(
          api_key=os.getenv("GROQ_API_KEY"),
        )
