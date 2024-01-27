import os

import pytest
from openai.types.chat import ChatCompletion


# pytest patch side effect for mocking openai calls. Use as a decorator on a test function. `@patch.object(openai.ChatCompletion, "create", side_effect=mock_openai_chat_completion)`
def mock_openai_chat_completion(**kwargs):
    response_map_list = [
        # Define the response for each set of input parameters. Format: [[input_params, response]]
        # Example 1
        [
            {
                "model": "gpt-3.5-turbo",
                "top_p": 1,
                "max_tokens": 3000,
                "temperature": 1,
                "stream": False,
                "messages": [
                    {
                        "content": "Write me a MySQL query to get this final output: total revenue from sales for each product category. Use the tables relationships defined here: Employees are related to Departments through the &#x27;DepartmentID&#x27; field..",
                        "role": "user",
                    }
                ],
            },
            ChatCompletion(
                **{
                    "id": "chatcmpl-8KZBExTKtsDnJGQjIF8rS9ZggECKn",
                    "choices": [
                        {
                            "finish_reason": "stop",
                            "index": 0,
                            "message": {
                                "content": "To calculate the total revenue from sales for each product category, we need to join multiple tables and perform aggregation. Assuming you have the following tables:\n\n1. Employees (with DepartmentID)\n2. Departments (with DepartmentID)\n3. Products (with ProductID)\n4. Sales (with EmployeeID, ProductID, and Revenue)\n\nHere is the MySQL query to obtain the desired output:\n\n```sql\nSELECT d.Category, SUM(s.Revenue) AS TotalRevenue\nFROM Sales s\nJOIN Employees e ON s.EmployeeID = e.EmployeeID\nJOIN Departments d ON e.DepartmentID = d.DepartmentID\nJOIN Products p ON s.ProductID = p.ProductID\nGROUP BY d.Category;\n```\n\nIn this query, we are joining the `Sales` table with the `Employees` table based on the `EmployeeID` column, then joining that result with the `Departments` table based on the `DepartmentID` column. Finally, we join this intermediate result with the `Products` table based on the `ProductID` column.\n\nThe `SUM(s.Revenue)` function calculates the total revenue for each group. We use the `GROUP BY` clause to group the results by the `Category` column from the `Departments` table.\n\nThis query will provide you with the final output of the total revenue from sales for each product category.",
                                "role": "assistant",
                                "function_call": None,
                                "tool_calls": None,
                            },
                        }
                    ],
                    "created": 1699912484,
                    "model": "gpt-3.5-turbo-0613",
                    "object": "chat.completion",
                    "system_fingerprint": None,
                    "usage": {
                        "completion_tokens": 297,
                        "prompt_tokens": 53,
                        "total_tokens": 350,
                    },
                }
            ),
        ],
        # Example 2
        [
            {
                "model": "gpt-3.5-turbo",
                "temperature": 1,
                "top_p": 1,
                "stream": False,
                "messages": [
                    {
                        "content": "Hi! Tell me 10 cool things to do in NYC.",
                        "role": "user",
                    }
                ],
            },
            ChatCompletion(
                **{
                    "id": "chatcmpl-8KZCn0XkSMuHHxhoBik45t32eNbyi",
                    "choices": [
                        {
                            "finish_reason": "stop",
                            "index": 0,
                            "message": {
                                "content": "1. Visit Times Square: Experience the bright lights and bustling atmosphere of this iconic NYC landmark. Enjoy shopping, dining, and various entertainment options.\n\n2. Explore Central Park: Take a leisurely stroll or rent a bike to explore the beautiful landscapes, visit the Central Park Zoo, have a picnic, or even go horseback riding.\n\n3. Walk the High Line: This elevated park built on a historic freight rail line offers stunning views of the city skyline, beautiful gardens, art installations, and a unique perspective of NYC.\n\n4. Take a ferry to the Statue of Liberty: Visit the iconic Statue of Liberty on Liberty Island and enjoy breathtaking views of the city from the Crown or the pedestal. You can also explore Ellis Island's immigration museum nearby.\n\n5. Visit the Metropolitan Museum of Art: Explore the vast collections of art and artifacts from around the world at the Met and immerse yourself in the rich cultural history.\n\n6. Discover the vibrant neighborhoods: Explore the diverse neighborhoods of NYC, such as Chinatown, Little Italy, Greenwich Village, and Williamsburg. Enjoy authentic cuisine, unique shops, and immerse yourself in different cultures.\n\n7. Catch a Broadway show: Experience the magic of Broadway by watching a world-class performance at one of the many theaters in the Theater District.\n\n8. Walk across the Brooklyn Bridge: Enjoy panoramic views of the city as you walk or bike across the iconic Brooklyn Bridge, connecting Manhattan and Brooklyn.\n\n9. Explore the Museum of Modern Art (MoMA): Discover modern and contemporary art at MoMA, featuring masterpieces by artists like Van Gogh, Picasso, Warhol, and many more.\n\n10. Enjoy the food scene: NYC is a food lover's paradise. Indulge in diverse culinary experiences, from street food to Michelin-starred restaurants. Don't forget to try New York-style pizza, bagels, and the famous cronut.",
                                "role": "assistant",
                                "function_call": None,
                                "tool_calls": None,
                            },
                        }
                    ],
                    "created": 1699912581,
                    "model": "gpt-3.5-turbo-0613",
                    "object": "chat.completion",
                    "system_fingerprint": None,
                    "usage": {
                        "prompt_tokens": 20,
                        "completion_tokens": 379,
                        "total_tokens": 399,
                    },
                }
            ),
        ],
    ]

    for input_params, response in response_map_list:
        if kwargs == input_params:
            return response
    raise Exception("Unexpected arguments:\n {}".format(kwargs))


def mock_openai_chat_completion_with_dependencies(**kwargs):
    response_map_list = [
        [
            {
                "model": "gpt-3.5-turbo",
                "top_p": 1,
                "temperature": 1,
                "stream": False,
                "messages": [{"content": "Tell me 10 fun attractions to do in NYC.", "role": "user"}],
            },
            ChatCompletion(
                **{
                    "id": "chatcmpl-8khHUHbetNyprE1ftmRu5WyVNP3O3",
                    "choices": [
                        {
                            "finish_reason": "stop",
                            "index": 0,
                            "message": {
                                "content": '1. Visit Times Square: Experience the iconic "Crossroads of the World" with its dazzling billboards, Broadway shows, and lively atmosphere.\n2. Explore Central Park: Take a leisurely stroll or rent a bike to discover this sprawling oasis in the heart of Manhattan, complete with picturesque landscapes, walking trails, and various attractions.\n3. Take a ferry to the Statue of Liberty: Visit the renowned Statue of Liberty on Liberty Island and enjoy stunning views of the city skyline from the ferry ride itself.\n4. Visit the Metropolitan Museum of Art: Immerse yourself in world-class art collections spanning thousands of years and diverse cultures, all housed in the magnificent Met museum.\n5. Explore the High Line: Walk along the elevated park built on a historic freight rail line, offering beautiful green spaces, public art installations, and fantastic views of the city.\n6. Enjoy a Broadway show: Watch a live performance of a Broadway musical or play in one of the iconic theaters in the Theater District, offering a memorable experience for theater enthusiasts.\n7. Visit the 9/11 Memorial and Museum: Pay your respects at the site of the former World Trade Center twin towers and learn about the events of September 11, 2001, at the informative museum.\n8. Take a food tour in Greenwich Village: Indulge in a delicious gastronomic adventure, exploring the vibrant food scene in Greenwich Village, renowned for its diverse restaurants and eateries.\n9. Visit the Brooklyn Bridge: Take a walk across this iconic suspension bridge, providing breathtaking views of the Manhattan skyline and the East River.\n10. Explore the Museum of Modern Art (MoMA): Discover a vast collection of modern and contemporary art, including works by artists like Van Gogh, Picasso, Warhol, and many more at this renowned art institution.',
                                "role": "assistant",
                            },
                        }
                    ],
                    "created": 1706140152,
                    "model": "gpt-3.5-turbo-0613",
                    "object": "chat.completion",
                    "usage": {"completion_tokens": 363, "prompt_tokens": 18, "total_tokens": 381},
                }
            ),
        ],
        # Example 2
        [
            {
                "model": "gpt-3.5-turbo",
                "temperature": 1,
                "top_p": 1,
                "stream": False,
                "messages": [
                    {"content": "Tell me 10 fun attractions to do in NYC.", "role": "user"},
                    {
                        "content": '1. Visit Times Square: Experience the iconic "Crossroads of the World" with its dazzling billboards, Broadway shows, and lively atmosphere.\n2. Explore Central Park: Take a leisurely stroll or rent a bike to discover this sprawling oasis in the heart of Manhattan, complete with picturesque landscapes, walking trails, and various attractions.\n3. Take a ferry to the Statue of Liberty: Visit the renowned Statue of Liberty on Liberty Island and enjoy stunning views of the city skyline from the ferry ride itself.\n4. Visit the Metropolitan Museum of Art: Immerse yourself in world-class art collections spanning thousands of years and diverse cultures, all housed in the magnificent Met museum.\n5. Explore the High Line: Walk along the elevated park built on a historic freight rail line, offering beautiful green spaces, public art installations, and fantastic views of the city.\n6. Enjoy a Broadway show: Watch a live performance of a Broadway musical or play in one of the iconic theaters in the Theater District, offering a memorable experience for theater enthusiasts.\n7. Visit the 9/11 Memorial and Museum: Pay your respects at the site of the former World Trade Center twin towers and learn about the events of September 11, 2001, at the informative museum.\n8. Take a food tour in Greenwich Village: Indulge in a delicious gastronomic adventure, exploring the vibrant food scene in Greenwich Village, renowned for its diverse restaurants and eateries.\n9. Visit the Brooklyn Bridge: Take a walk across this iconic suspension bridge, providing breathtaking views of the Manhattan skyline and the East River.\n10. Explore the Museum of Modern Art (MoMA): Discover a vast collection of modern and contemporary art, including works by artists like Van Gogh, Picasso, Warhol, and many more at this renowned art institution.',
                        "role": "assistant",
                    },
                    {
                        "content": "Generate an itinerary ordered by geographic location for these activities: 1. Visit Times Square: Experience the iconic &quot;Crossroads of the World&quot; with its dazzling billboards, Broadway shows, and lively atmosphere.\n2. Explore Central Park: Take a leisurely stroll or rent a bike to discover this sprawling oasis in the heart of Manhattan, complete with picturesque landscapes, walking trails, and various attractions.\n3. Take a ferry to the Statue of Liberty: Visit the renowned Statue of Liberty on Liberty Island and enjoy stunning views of the city skyline from the ferry ride itself.\n4. Visit the Metropolitan Museum of Art: Immerse yourself in world-class art collections spanning thousands of years and diverse cultures, all housed in the magnificent Met museum.\n5. Explore the High Line: Walk along the elevated park built on a historic freight rail line, offering beautiful green spaces, public art installations, and fantastic views of the city.\n6. Enjoy a Broadway show: Watch a live performance of a Broadway musical or play in one of the iconic theaters in the Theater District, offering a memorable experience for theater enthusiasts.\n7. Visit the 9/11 Memorial and Museum: Pay your respects at the site of the former World Trade Center twin towers and learn about the events of September 11, 2001, at the informative museum.\n8. Take a food tour in Greenwich Village: Indulge in a delicious gastronomic adventure, exploring the vibrant food scene in Greenwich Village, renowned for its diverse restaurants and eateries.\n9. Visit the Brooklyn Bridge: Take a walk across this iconic suspension bridge, providing breathtaking views of the Manhattan skyline and the East River.\n10. Explore the Museum of Modern Art (MoMA): Discover a vast collection of modern and contemporary art, including works by artists like Van Gogh, Picasso, Warhol, and many more at this renowned art institution..",
                        "role": "user",
                    },
                ],
            },
            ChatCompletion(
                **{
                    "id": "chatcmpl-8khHahyYOoH456N6fjXgs2PQjfqDD",
                    "choices": [
                        {
                            "finish_reason": "stop",
                            "index": 0,
                            "message": {
                                "content": "Here's an itinerary ordered by geographic location:\n\n1. Start your day at Times Square.\n2. From there, head south to the 9/11 Memorial and Museum.\n3. After paying your respects, take a walk to the nearby Staten Island Ferry Terminal to catch a ferry to the Statue of Liberty on Liberty Island.\n4. Return from the ferry and head north to the High Line, located in the Chelsea neighborhood.\n5. Continue north to the Museum of Modern Art (MoMA) in Midtown Manhattan.\n6. From MoMA, head east to visit Central Park.\n7. Explore Central Park at your leisure, taking a stroll or renting a bike to fully enjoy the park's attractions.\n8. Afterward, head downtown to the Metropolitan Museum of Art (Met) on the Upper East Side to immerse yourself in its world-class art collections.\n9. From the Met, travel southwest to Greenwich Village for a delightful food tour, exploring the diverse culinary offerings.\n10. Wrap up your day by walking across the Brooklyn Bridge to enjoy stunning views of the Manhattan skyline and the East River.\n\nNote: This itinerary can be adjusted based on personal preferences and time availability.",
                                "role": "assistant",
                            },
                        }
                    ],
                    "created": 1706140158,
                    "model": "gpt-3.5-turbo-0613",
                    "object": "chat.completion",
                    "usage": {"completion_tokens": 236, "prompt_tokens": 767, "total_tokens": 1003},
                }
            ),
        ],
    ]

    for input_params, response in response_map_list:
        if kwargs == input_params:
            return response
    raise Exception("Unexpected arguments:\n {}".format(kwargs))

@pytest.fixture
def set_temporary_env_vars():
    """
    A pytest fixture to set fake values for specific environment variables
    and restore their original values after the test.

    Usage:
        Use this fixture by adding it as an argument to your test function.

    Example:
        def test_something(set_temporary_env_vars):
            # Your test code here

    This fixture sets fake values for the following environment variables:
    - OPENAI_API_KEY

    It restores the original values (if they existed) after the test is complete.
    """
    # Define the environment variables to be manipulated
    env_vars_to_set = {"OPENAI_API_KEY"}

    # Store the original values of the environment variables
    original_env_values = {}
    for env_var in env_vars_to_set:
        original_env_values[env_var] = os.environ.get(env_var)

    try:
        # Set fake values for the environment variables
        for env_var in env_vars_to_set:
            os.environ[env_var] = "fakekey"

        # Yield control to the test function
        yield
    finally:
        # Clean up: Restore the original values of the environment variables
        for env_var in env_vars_to_set:
            original_value = original_env_values.get(env_var)
            if original_value is not None:
                os.environ[env_var] = original_value
            else:
                del os.environ[env_var]
