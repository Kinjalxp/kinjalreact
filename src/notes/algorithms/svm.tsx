import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

import img1 from "../../assets/svmGraph1.png";
import img2 from "../../assets/svmGraph2.png";
import svmBanner from "../../assets/svmCaveman.png";
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
  imageWidth?: string;
  images?: string[];
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
  imageWidth = "w-full",
  images,
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
        <div className={`${imageWidth} mb-6`}>
          <img
            src={image}
            alt={imageAlt ?? "Step output"}
            className="rounded-lg border border-gray-200 w-full object-contain"
          />
        </div>
      )}
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Step output ${i + 1}`}
              className="rounded-lg border border-gray-200 w-full object-contain"
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

const SVM = () => (
  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-2">Support Vector Machine</h1>
    <p className="text-gray-500 mb-6">
      A step-by-step walkthrough of training an SVM classifier on the breast
      cancer dataset.
    </p>
    <LightboxImage
      src={svmBanner}
      alt="Support vector machine overview"
      className="rounded-lg border border-gray-200 w-full object-contain mb-8"
    />

    <Step
      number={1}
      title="Import Libraries"
      description="We import the necessary libraries."
      code={step1}
      //  output={step1Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={2}
      title="View Feature Names"
      description="We display the names of the features available in the dataset."
      code={step2}
      output={step2Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={3}
      title="Create a DataFrame"
      description="We convert the dataset into a Pandas DataFrame."
      code={step3}
      output={step3Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={4}
      title="Add the Target Labels"
      description="We add the target column containing the numerical class labels for each flower sample."
      code={step4}
      output={step4Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={5}
      title="View Target Classes"
      description="We display the names of the flower species represented by the target labels in the dataset."
      code={step5}
      output={step5Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={6}
      title="Inspect Samples from One Class"
      description="We view a few records belonging to the first flower species to better understand the structure of the data."
      code={step6}
      output={step6Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={7}
      title="Add Flower Names to the Dataset"
      description="We create a new column that maps the numerical target labels to their corresponding flower species names for easier interpretation."
      code={step7}
      output={step7Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={8}
      title="Import the Plotting Library"
      description="We import Matplotlib, a library used for creating visualizations and charts."
      code={step8}
      //  output={step7Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={9}
      title="Enable Inline Plot Display"
      description="We configure the notebook to display plots directly within the output cells."
      code={step9}
      //  output={step7Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={10}
      title="Separate Data by Flower Species"
      description="We create separate DataFrames for each flower species."
      code={step10}
      //  output={step7Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={11}
      title="Examine a Species Subset"
      description="We display a few records from one of the flower species to verify that the data was filtered correctly."
      code={step11}
      output={step11Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={12}
      title="Visualize Sepal Measurements"
      description="We create a scatter plot comparing sepal length and sepal width for two flower species."
      code={step12}
      // output={step11Output}
      // note=""
      image={img1}
      // imageAlt=""
    />

    <Step
      number={13}
      title="Visualize Petal Measurements"
      description="We create a scatter plot comparing petal length and petal width for two flower species."
      code={step13}
      // output={step11Output}
      // note=""
      image={img2}
      // imageAlt=""
    />

    <Step
      number={14}
      title="Import the Train-Test Split Function"
      description="Now we import train_test_split, which allows us to divide the dataset into training and testing sets."
      code={step14}
      // output={step11Output}
      // note=""
      //  image={img2}
      // imageAlt=""
    />

    <Step
      number={15}
      title="Prepare the Feature Data"
      description="We create the feature dataset by removing the target and flower name columns."
      code={step15}
      output={step15Output}
      // note=""
      //  image={img2}
      // imageAlt=""
    />

    <Step
      number={16}
      title="Prepare the Target Variable"
      description="We store the target labels separately."
      code={step16}
      //output={step15Output}
      // note=""
      //  image={img2}
      // imageAlt=""
    />

    <Step
      number={17}
      title="Split the Dataset into Training and Testing Sets"
      description="We divide the data into training and testing sets."
      code={step17}
      //output={step15Output}
      // note=""
      //  image={img2}
      // imageAlt=""
    />

    <Step
      number={18}
      title="Verify the Training Set Size"
      description="We check the number of samples in the training dataset to confirm that the data was split successfully."
      code={step18}
      output={step18Output}
      // note=""
      //  image={img2}
      // imageAlt=""
    />

    <Step
      number={19}
      title="Verify the Testing Set Size"
      description="We check the number of samples in the testing dataset to confirm that the data was split successfully."
      code={step19}
      output={step19Output}
      // note=""
      //  image={img2}
      // imageAlt=""
    />

    <Step
      number={20}
      title="Create the Support Vector Machine Model"
      description="We import the Support Vector Classifier (SVC) and create an instance of the model."
      code={step20}
      //output={step19Output}
      // note=""
      //  image={img2}
      // imageAlt=""
    />

    <Step
      number={21}
      title="Train the Model"
      description="We train the Support Vector Machine using the training data."
      code={step21}
      output={step21Output}
      // note=""
      //  image={img2}
      // imageAlt=""
    />

    <Step
      number={22}
      title="Evaluate Model Accuracy"
      description="Now we calculate the model's accuracy on the testing dataset."
      code={step22}
      output={step22Output}
      // note=""
      //  image={img2}
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
from sklearn.datasets import load_iris
iris = load_iris()`;

const step2 = `iris.feature_names`;
const step2Output = `['sepal length (cm)',
 'sepal width (cm)',
 'petal length (cm)',
 'petal width (cm)']`;

const step3 = `df = pd.DataFrame(iris.data, columns=iris.feature_names)
df.head()`;
const step3Output = `   sepal length (cm)	sepal width (cm)	petal length (cm)	petal width (cm)
0	    5.1	                3.5	                1.4	                0.2
1	    4.9	                3.0	                1.4	                0.2
2	    4.7	                3.2	                1.3	                0.2
3	    4.6	                3.1	                1.5	                0.2
4	    5.0	                3.6	                1.4	                0.2
`;

const step4 = `df['target'] = iris.target
df.head()`;
const step4Output = `   sepal length (cm)	sepal width (cm)	petal length (cm)	petal width (cm)	target
0	    5.1	                3.5	                1.4	                0.2	                0
1	    4.9	                3.0	                1.4	                0.2	                0
2	    4.7	                3.2	                1.3	                0.2	                0
3	    4.6	                3.1	                1.5	                0.2	                0
4	    5.0	                3.6	                1.4	                0.2	                0`;

const step5 = `iris.target_names`;
const step5Output = `array(['setosa', 'versicolor', 'virginica'], dtype='<U10')`;

const step6 = `df[df.target==0].head()`;
const step6Output = `   sepal length (cm)	  sepal width (cm)	  petal length (cm)	  petal width (cm)	  target
0	     5.1	              3.5	               1.4	              0.2	            0	        
1	     4.9	              3.0	               1.4	              0.2	            0	      
2	     4.7	              3.2	               1.3	              0.2	            0	    
3	     4.6	              3.1	               1.5	              0.2	            0	       
4	     5.0	              3.6	               1.4	              0.2	            0	       
`;

const step7 = `df['flower_name'] = df.target.apply(lambda x: iris.target_names[x])
df.head()`;
const step7Output = `	sepal length (cm)	sepal width (cm)	petal length (cm)	petal width (cm)	target	flower_name
0	      5.1	          3.5	                  1.4	              0.2	          0	      setosa
1	      4.9             3.0	                  1.4	              0.2	          0	      setosa
2	      4.7             3.2	                  1.3	              0.2	          0	      setosa
3	      4.6             3.1	                  1.5	              0.2	          0	      setosa
4	      5.0             3.6	                  1.4	              0.2	          0	      setosa
`;

const step8 = `from matplotlib import pyplot as plt`;

const step9 = `%matplotlib inline`;

const step10 = `df0 = df[df.target==0]
df1 = df[df.target==1]
df2 = df[df.target==2]`;

const step11 = `df0.head()`;
const step11Output = `  sepal length (cm)	  sepal width (cm)	  petal length (cm)	  petal width (cm)	  target	flower_name
0	    5.1	                3.5                 1.4	               0.2	             0	       setosa
1	    4.9	                3.0                 1.4	               0.2	             0	       setosa
2	    4.7	                3.2                 1.3	               0.2	             0	       setosa
3	    4.6	                3.1                 1.5	               0.2	             0	       setosa
4	    5.0	                3.6                 1.4	               0.2	             0	       setosa
`;

const step12 = `plt.xlabel('sepal length (cm)')
plt.ylabel('sepal width (cm)')
plt.scatter(df0['sepal length (cm)'],df0['sepal width (cm)'],color='green',marker='+')
plt.scatter(df1['sepal length (cm)'],df1['sepal width (cm)'],color='pink')`;

const step13 = `plt.xlabel('petal length (cm)')
plt.ylabel('petal width (cm)')
plt.scatter(df0['petal length (cm)'],df0['petal width (cm)'],color='green',marker='+')
plt.scatter(df1['petal length (cm)'],df1['petal width (cm)'],color='pink')`;

const step14 = `from sklearn.model_selection import train_test_split`;

const step15 = `X = df.drop(['target','flower_name'],axis='columns')
X.head()`;
const step15Output = `  sepal length (cm)	  sepal width (cm)	  petal length (cm)	  petal width (cm)
0	    5.1	                3.5	               1.4	                0.2
1	    4.9	                3.0	               1.4	                0.2
2	    4.7	                3.2	               1.3	                0.2
3	    4.6	                3.1	               1.5	                0.2
4	    5.0                 3.6	               1.4	                0.2
`;

const step16 = `y = df.target`;

const step17 = `X_train, X_test, y_train, y_test = train_test_split(X,y,test_size = 0.2)`;

const step18 = `len(X_train)`;
const step18Output = `120`;

const step19 = `len(X_test)`;
const step19Output = `30`;

const step20 = `from sklearn.svm import SVC
model = SVC()`;

const step21 = `model.fit(X_train, y_train)`;
const step21Output = `SVC()`;

const step22 = `model.score(X_test, y_test)`;
const step22Output = `1.0`;

export default SVM;
