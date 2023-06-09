import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const functionInput = req.body.functionInput || '';
  const descriptionInput = req.body.descriptionInput || '';
  
  if (functionInput.trim().length === 0 || descriptionInput.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid function and description",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(functionInput, descriptionInput),
      temperature: 0.6,
      max_tokens: 2048
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(functionInput, descriptionInput) {
  return `Write NatSpec documentation for this Solidity function, using short and simple comments. 
  constrains: never write the input function in the response.

Use this structure:
  
  /**
   * @notice 
   * @dev 
   * @param 
   * @return 
   **/

  Generate @return for each return value if there is more than one return value in this order: 
  @return _name1 type1
  @return _name2 type2
  etc...
  
  If the returns value doesn't have class names generate @return documentation for each return value this order: 
  @return type description
  etc...

  If there isn't any retruns() in the fucntion declaration skip the @return documentation completely like this:
  /**
   * @notice 
   * @dev 
   * @param 
   **/

Smart contract description: ${descriptionInput}

Function: 

${functionInput}`;
}
