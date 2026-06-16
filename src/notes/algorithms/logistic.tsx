import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

import img1 from "../../assets/LogRegGraph1.png";
import logRegBanner from "../../assets/LogRegCaveMan.png";
import LightboxImage from "../../components/LightboxImage";

type CodeBlockProps = {
  code: string;
};

const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200 mb-2">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
        <span className="text-xs text-gray-500 font-mono">Python</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors"
        >
          {copied ? (
            <>
              <Check size={13} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language="python"
        style={oneLight}
        customStyle={{ margin: 0, borderRadius: 0, fontSize: "0.85rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

type OutputBlockProps = {
  output: string;
};

const OutputBlock = ({ output }: OutputBlockProps) => (
  <div className="rounded-lg border border-gray-200 mb-6 overflow-hidden">
    <div className="px-4 py-2 bg-gray-800 text-xs text-gray-400 font-mono">
      Output
    </div>
    <pre className="bg-gray-900 text-green-400 text-sm font-mono p-4 overflow-x-auto whitespace-pre">
      {output}
    </pre>
  </div>
);

type StepProps = {
  number: number;
  title: string;
  description?: string;
  code: string;
  output?: string;
  note?: string;
  image?: string;
  imageAlt?: string;
};

const Step = ({
  number,
  title,
  description,
  code,
  output,
  note,
  image,
  imageAlt,
}: StepProps) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-3">
      <span className="w-7 h-7 rounded-full bg-black text-white text-sm font-bold flex items-center justify-center shrink-0">
        {number}
      </span>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    {description && <p className="text-gray-600 mb-4 ml-10">{description}</p>}
    <div className="ml-10">
      <CodeBlock code={code} />
      {output && <OutputBlock output={output} />}
      {note && <p className="text-gray-600 text-sm mt-2 mb-4 ml-0">{note}</p>}
      {image && (
        <div className="mb-6">
          <img
            src={image}
            alt={imageAlt ?? "Step output"}
            className="rounded-lg border border-gray-200 w-full object-contain"
          />
        </div>
      )}
    </div>
  </div>
);

const Logistic = () => (
  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-2">Logistic Regression</h1>
    <p className="text-gray-500 mb-6">
      A step-by-step walkthrough of training a logistic regression model.
    </p>
    <LightboxImage
      src={logRegBanner}
      alt="Logistic regression overview"
      className="rounded-lg border border-gray-200 w-full object-contain mb-8"
    />

    <Step
      number={1}
      title="Import libraries"
      description="We start by importing the necessary libraries"
      code={step1}

      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={2}
      title="Display data"
      description="We then import the data and display"
      code={step2}
      output={step2output}
      // note=""
      //image={img1}
      // imageAlt=""
    />

    <Step
      number={3}
      title="Graph data"
      description="Now we graph the data"
      code={step3}
      // note=""
      image={img1}
      // imageAlt=""
    />

    <Step
      number={4}
      title="Import Train-Test Split Function"
      description="We import train_test_split from Scikit-learn to split our data into training and testing sets"
      code={step4}
      // note=""
      //   image={img1}
      // imageAlt=""
    />

    <Step
      number={5}
      title="Split data into training & testing Sets"
      description="Now we split our data into training and testing sets"
      code={step5}
      // note=""
      //   image={img1}
      // imageAlt=""
    />

    <Step
      number={6}
      title="Import the Logistic Regression Model"
      description="Now let's import the logistic regression model from Scikit-learn"
      code={step6}
      // note=""
      //   image={img1}
      // imageAlt=""
    />

    <Step
      number={7}
      title="Create a Logistic Regression Model"
      description="Now we create an instance of the logistic regression model"
      code={step7}
      // note=""
      //   image={img1}
      // imageAlt=""
    />

    <Step
      number={8}
      title="Train the model"
      description="We train the logistic regression model using the training data"
      code={step8}
      output={step8output}
      //note=""
      //   image={img1}
      // imageAlt=""
    />

    <Step
      number={9}
      title="Make Predictions"
      description="We make predictions on the test data using the trained model"
      code={step9}
      output={step9output}
      //note=""
      //   image={img1}
      // imageAlt=""
    />

    <Step
      number={10}
      title="Evaluate Model Accuracy"
      description="We calculate the model's accuracy on the test dataset"
      code={step10}
      output={step10output}
      //note=""
      //   image={img1}
      // imageAlt=""
    />

    <Step
      number={11}
      title="View Prediction Probabilities"
      description="We can also view the predicted probabilities for each class"
      code={step11}
      output={step11output}
      //note=""
      //   image={img1}
      // imageAlt=""
    />

    <Step
      number={12}
      title="Predict for a new sample"
      description="Now we can use the trained model to predict whether a new sample would buy insurance"
      code={step12}
      output={step12output}
      //note=""
      //   image={img1}
      // imageAlt=""
    />

    {/* Add more <Step> blocks below as you build out the notebook */}
    <div className="flex justify-center mt-6 mb-4">
      <button
        onClick={() => {
          const scroller = document.querySelector(".overflow-y-auto");
          if (scroller) scroller.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-sm text-gray-400 hover:text-black transition-colors tracking-wide border-b border-gray-200 hover:border-gray-500 pb-0.5"
      >
        ↑ back to top
      </button>
    </div>
  </div>
);

const step1 = `import pandas as pd
from matplotlib import pyplot as plt
%matplotlib inline`;

const step2 = `df = pd.read_csv("/content/sample_data/insurance_data.csv")
df.head()`;

const step2output = `    age    bought_insurance
0	22	         0
1	25	         0
2	47	         1
3	52	         0
4	46	         1`;

const step3 = `plt.scatter(df.age,df.bought_insurance,marker='+',color='purple')`;

const step4 = `from sklearn.model_selection import train_test_split`;

const step5 = `X_train, X_test, y_train,y_test = train_test_split(df[['age']],df.bought_insurance,test_size=0.1)`;

const step6 = `from sklearn.linear_model import LogisticRegression`;

const step7 = `model = LogisticRegression()`;

const step8 = `model.fit(X_train,y_train)`;
const step8output = `LogisticRegression()`;

const step9 = `model.predict(X_test)`;
const step9output = `array([1, 1, 1])`;

const step10 = `model.score(X_test,y_test)`;
const step10output = `0.6666666666666666`;

const step11 = `model.predict_proba(X_test)`;
const step11output = `array([[0.04281542, 0.95718458],
       [0.04281542, 0.95718458],
       [0.0261498 , 0.9738502 ]])`;

const step12 = `model.predict(pd.DataFrame([[56]], columns=['age']))`;
const step12output = `array([1])`;

export default Logistic;
