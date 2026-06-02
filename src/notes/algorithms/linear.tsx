import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

// Replace this import with your actual screenshot
import img1 from "../../assets/LinearRegGraph1.png";
import img2 from "../../assets/LinearRegGraph2.png";

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

const Linear = () => (
  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-2">Linear Regression</h1>
    <p className="text-gray-500 mb-8">
      A step-by-step walkthrough of training a linear regression model on
      housing data.
    </p>
    <Step
      number={1}
      title="Download imports"
      description="We start by importing libraries"
      code={loadLib}
      output={loadLibOutput}
      //   note=""
      // Uncomment and set your image once you have it:
      // image={chartImg}
      // imageAlt="Housing dataset preview"
    />
    <Step
      number={2}
      title="Download data"
      description="We then import the data and display it"
      code={loadData}
      output={loadDataOutput}
      //  note=""
      // Uncomment and set your image once you have it:
      // image={chartImg}
      // imageAlt="Housing dataset preview"
    />
    <Step
      number={3}
      title="Graph data"
      description="We then graph the data"
      code={graphData}
      output={graphDataOutput}
      // Uncomment and set your image once you have it:
      image={img1}
      imageAlt="Housing dataset preview"
      // note=""
    />

    <Step
      number={4}
      title="Apply Linear Model"
      description="Now we will apply the linear regression model"
      code={ModelApply}
      output={ModelApplyOutput}
      // Uncomment and set your image once you have it:
      // image={chartImg}
      // imageAlt="Housing dataset preview"
      //note=""
    />
    <Step
      number={5}
      title="Prediction"
      description="Now make a prediction using sample data"
      code={prediction1}
      output={prediction1Output}
      // Uncomment and set your image once you have it:
      // image={chartImg}
      // imageAlt="Housing dataset preview"
      //  note=""
    />
    <Step
      number={6}
      title="Find coefficient"
      description="Now let's find the coefficient or the slope of the best fit line"
      code={findCoef}
      output={findCoefOutput}
      // Uncomment and set your image once you have it:
      // image={chartImg}
      // imageAlt="Housing dataset preview"
      // note=""
    />
    <Step
      number={6}
      title="Find intercept"
      description="Now let's find the interception"
      code={findCoef}
      output={findCoefOutput}
      //note="Hello"
      // Uncomment and set your image once you have it:
      // image={chartImg}
      // imageAlt="Housing dataset preview"
    />
    <Step
      number={7}
      title="Substition"
      description="Now substitute the values in the slope function"
      code={subVal}
      output={subValOutput}
      // note=""
      // Uncomment and set your image once you have it:
      // image={chartImg}
      // imageAlt="Housing dataset preview"
    />
    <Step
      number={8}
      title="Graph Best Fit Line"
      description="Now let's graph the data with the line of best fit"
      code={bestFit}
      output={bestFitOutput}
      //  note=""
      // Uncomment and set your image once you have it:
      image={img2}
      // imageAlt="Housing dataset preview"
    />
    <Step
      number={9}
      title="Graph Best Fit Line"
      description="Now let's graph the data with the line of best fit"
      code={bestFit}
      output={bestFitOutput}
      //note=""
      // Uncomment and set your image once you have it:
      image={img2}
      // imageAlt="Housing dataset preview"
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

const loadLib = `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn import linear_model`;

const loadLibOutput = ``;

const loadData = `df = pd.read_csv("/content/sample_data/homeprices.csv")
print(df.columns.tolist())
df.head()`;

const loadDataOutput = `   area  price  
0  2600  550000         
1  3000  565000         
2  3200  610000         
3  3600  680000         
4  4000  725000         `;

const graphData = `%matplotlib inline
plt.xlabel('area(sqr ft)')
plt.ylabel('price(USD)')
plt.scatter(df.area,df.price,color='blue',marker = '+')`;

const graphDataOutput = ``;

const ModelApply = `reg = linear_model.LinearRegression()
reg.fit(df[['area']],df.price)`;

const ModelApplyOutput = `LinearRegression()`;

const prediction1 = `reg.predict([[3300]])`;

const prediction1Output = `array([628715.75342466])`;

const findCoef = `reg.coef_`;

const findCoefOutput = `array([135.78767123])`;

const subVal = `# y = m*x + b
135.78767123*3300+180616.43835616432`;

const subValOutput = `628715.7534151643`;

const bestFit = `%matplotlib inline
plt.xlabel('area(sqr ft)')
plt.ylabel('price(USD)')
plt.scatter(df.area,df.price,color='purple',marker = '+')
plt.plot(df.area,reg.predict(df[['area']]),color="pink")`;

const bestFitOutput = ``;

export default Linear;
