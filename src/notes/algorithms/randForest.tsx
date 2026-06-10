import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

// import img1 from "../../assets/RandForestGraph1.png";
import img1 from "../../assets/RandForestImg1.png";
import img2 from "../../assets/RandForestImg2.png";
import img3 from "../../assets/RandForestImg3.png";
import img4 from "../../assets/RandForestImg4.png";
import img5 from "../../assets/RandForestImg5.png";

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

const RandForest = () => (
  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-2">Random Forest</h1>
    <p className="text-gray-500 mb-8">
      A step-by-step walkthrough of training a random forest classifier on the
      Titanic dataset.
    </p>

    <Step
      number={1}
      title="Import Libraries and Load the Dataset"
      description="We import the necessary libraries and load the handwritten digits dataset."
      code={step1}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={2}
      title="Explore the Dataset"
      description="We explore the structure and contents of the loaded dataset."
      code={step2}
      output={step2Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={3}
      title="Visualize the Data"
      description="We visualize some of the images from the dataset."
      code={step3}
      // note=""
      images={[img1, img2, img3, img4]}
      // imageAlt=""
    />

    <Step
      number={4}
      title="Examine the Feature Data"
      description="Now lets examine the feature data and see how it corresponds to the images we just visualized"
      code={step4}
      output={step4Output}
      // note=""
      // images={[img1, img2, img3, img4]}
      // imageAlt=""
    />

    <Step
      number={5}
      title="Create a DataFrame"
      description="We convert the feature data into a Pandas DataFrame."
      code={step5}
      output={step5Output}
      // note=""
      // images={[img1, img2, img3, img4]}
      // imageAlt=""
    />

    <Step
      number={6}
      title="Add the Target Labels"
      description="We add the target column containing the correct digit labels for each image."
      code={step6}
      output={step6Output}
      // note=""
      // images={[img1, img2, img3, img4]}
      // imageAlt=""
    />

    <Step
      number={7}
      title="Split dataset into Training and Testing Sets"
      description="We divide the dataset into training and testing sets."
      code={step7}
      // note=""
      // images={[img1, img2, img3, img4]}
      // imageAlt=""
    />

    <Step
      number={8}
      title="Train the Random Forest Model"
      description="We import the Random Forest classifier, create a model instance, and train it using the training data."
      code={step8}
      output={step8Output}
      // note=""
      // images={[img1, img2, img3, img4]}
      // imageAlt=""
    />

    <Step
      number={9}
      title="Evaluate Model Accuracy"
      description="Now let's measure the model's accuracy on the testing dataset."
      code={step9}
      output={step9Output}
      // note=""
      // images={[img1, img2, img3, img4]}
      // imageAlt=""
    />

    <Step
      number={10}
      title="Generate Predictions"
      description="We use the trained model to predict the digit labels for the test dataset."
      code={step10}
      // note=""
      // images={[img1, img2, img3, img4]}
      // imageAlt=""
    />

    <Step
      number={11}
      title="Create a Confusion Matrix"
      description="Now we will generate a confusion matrix to compare the model's predictions against the true labels."
      code={step11}
      output={step11Output}
      // images={[img1, img2, img3, img4]}
      // imageAlt=""
    />

    <Step
      number={12}
      title="Visualize the Confusion Matrix"
      description="We create a heatmap of the confusion matrix for easier interpretation."
      code={step12}
      image={img5}
      imageWidth="w-3/4"
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
from sklearn.datasets import load_digits
digits = load_digits()`;

const step2 = `dir(digits)`;
const step2Output = `['DESCR', 'data', 'feature_names', 'frame', 'images', 'target', 'target_names']`;

const step3 = `%matplotlib inline
import matplotlib.pyplot as plt
plt.gray()
for i in range(4):
  plt.matshow(digits.images[i])`;

const step4 = `digits.data[:5]`;
const step4Output = `array([[ 0.,  0.,  5., 13.,  9.,  1.,  0.,  0.,  0.,  0., 13., 15., 10.,
        15.,  5.,  0.,  0.,  3., 15.,  2.,  0., 11.,  8.,  0.,  0.,  4.,
        12.,  0.,  0.,  8.,  8.,  0.,  0.,  5.,  8.,  0.,  0.,  9.,  8.,
         0.,  0.,  4., 11.,  0.,  1., 12.,  7.,  0.,  0.,  2., 14.,  5.,
        10., 12.,  0.,  0.,  0.,  0.,  6., 13., 10.,  0.,  0.,  0.],
       [ 0.,  0.,  0., 12., 13.,  5.,  0.,  0.,  0.,  0.,  0., 11., 16.,
         9.,  0.,  0.,  0.,  0.,  3., 15., 16.,  6.,  0.,  0.,  0.,  7.,
        15., 16., 16.,  2.,  0.,  0.,  0.,  0.,  1., 16., 16.,  3.,  0.,
         0.,  0.,  0.,  1., 16., 16.,  6.,  0.,  0.,  0.,  0.,  1., 16.,
        16.,  6.,  0.,  0.,  0.,  0.,  0., 11., 16., 10.,  0.,  0.],
       [ 0.,  0.,  0.,  4., 15., 12.,  0.,  0.,  0.,  0.,  3., 16., 15.,
        14.,  0.,  0.,  0.,  0.,  8., 13.,  8., 16.,  0.,  0.,  0.,  0.,
         1.,  6., 15., 11.,  0.,  0.,  0.,  1.,  8., 13., 15.,  1.,  0.,
         0.,  0.,  9., 16., 16.,  5.,  0.,  0.,  0.,  0.,  3., 13., 16.,
        16., 11.,  5.,  0.,  0.,  0.,  0.,  3., 11., 16.,  9.,  0.],
       [ 0.,  0.,  7., 15., 13.,  1.,  0.,  0.,  0.,  8., 13.,  6., 15.,
         4.,  0.,  0.,  0.,  2.,  1., 13., 13.,  0.,  0.,  0.,  0.,  0.,
         2., 15., 11.,  1.,  0.,  0.,  0.,  0.,  0.,  1., 12., 12.,  1.,
         0.,  0.,  0.,  0.,  0.,  1., 10.,  8.,  0.,  0.,  0.,  8.,  4.,
         5., 14.,  9.,  0.,  0.,  0.,  7., 13., 13.,  9.,  0.,  0.],
       [ 0.,  0.,  0.,  1., 11.,  0.,  0.,  0.,  0.,  0.,  0.,  7.,  8.,
         0.,  0.,  0.,  0.,  0.,  1., 13.,  6.,  2.,  2.,  0.,  0.,  0.,
         7., 15.,  0.,  9.,  8.,  0.,  0.,  5., 16., 10.,  0., 16.,  6.,
         0.,  0.,  4., 15., 16., 13., 16.,  1.,  0.,  0.,  0.,  0.,  3.,
        15., 10.,  0.,  0.,  0.,  0.,  0.,  2., 16.,  4.,  0.,  0.]]),`;

const step5 = `df = pd.DataFrame(digits.data)
df.head()`;
const step5Output = `	 0	 1	     2	  3	     4	     5	  6	     7	  8	     9	...	54	 55	    56	 57	    58	 59	    60	    61	    62	 63
0	0.0	 0.0	5.0	 13.0	9.0	    1.0	 0.0	0.0	 0.0	0.0	...	0.0	 0.0	0.0	 0.0	6.0	 13.0	10.0	0.0	    0.0	 0.0
1	0.0	 0.0	0.0	 12.0	13.0	5.0	 0.0	0.0	 0.0	0.0	...	0.0	 0.0	0.0  0.0	0.0	 11.0	16.0	10.0	0.0	 0.0
2	0.0	 0.0	0.0	 4.0	15.0	12.0 0.0	0.0	 0.0	0.0	...	5.0	 0.0	0.0	 0.0	0.0	 3.0	11.0	16.0	9.0	 0.0
3	0.0	 0.0	7.0	 15.0	13.0	1.0	 0.0	0.0	 0.0	8.0	...	9.0	 0.0	0.0  0.0	7.0	 13.0	13.0	9.0	    0.0	 0.0
4	0.0	 0.0	0.0	 1.0	11.0	0.0	 0.0	0.0	 0.0	0.0	...	0.0	 0.0	0.0	 0.0	0.0	 2.0	16.0	4.0	    0.0	 0.0`;

const step6 = `df['target']=digits.target
df.head()`;
const step6Output = `	 0	 1	     2	  3	     4	     5	  6	     7	  8	     9	...	54	 55	    56	 57	    58	 59	    60	    61	    62	 63   target
0	0.0	 0.0	5.0	 13.0	9.0	    1.0	 0.0	0.0	 0.0	0.0	...	0.0	 0.0	0.0	 0.0	6.0	 13.0	10.0	0.0	    0.0	 0.0    0
1	0.0	 0.0	0.0	 12.0	13.0	5.0	 0.0	0.0	 0.0	0.0	...	0.0	 0.0	0.0  0.0	0.0	 11.0	16.0	10.0	0.0	 0.0    1
2	0.0	 0.0	0.0	 4.0	15.0	12.0 0.0	0.0	 0.0	0.0	...	5.0	 0.0	0.0	 0.0	0.0	 3.0	11.0	16.0	9.0	 0.0    2
3	0.0	 0.0	7.0	 15.0	13.0	1.0	 0.0	0.0	 0.0	8.0	...	9.0	 0.0	0.0  0.0	7.0	 13.0	13.0	9.0	    0.0	 0.0    3
4	0.0	 0.0	0.0	 1.0	11.0	0.0	 0.0	0.0	 0.0	0.0	...	0.0	 0.0	0.0	 0.0	0.0	 2.0	16.0	4.0	    0.0	 0.0    4`;

const step7 = `from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(df.drop(['target'],axis='columns'),digits.target,test_size=0.2)`;

const step8 = `from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier()
model.fit(X_train,y_train)`;
const step8Output = `RandomForestClassifier()`;

const step9 = `model.score(X_test,y_test)`;
const step9Output = `0.9777777777777777`;

const step10 = `y_predicted = model.predict(X_test)`;

const step11 = `from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test,y_predicted)
cm`;
const step11Output = `array([[29,  0,  0,  0,  0,  0,  1,  0,  0,  0],
       [ 0, 37,  0,  0,  0,  0,  0,  0,  0,  0],
       [ 0,  0, 34,  0,  0,  0,  0,  0,  0,  0],
       [ 0,  0,  0, 34,  0,  0,  0,  0,  2,  0],
       [ 0,  0,  0,  0, 45,  0,  0,  0,  0,  0],
       [ 0,  0,  0,  0,  0, 36,  0,  0,  0,  1],
       [ 0,  0,  0,  0,  0,  0, 39,  0,  0,  0],
       [ 0,  0,  0,  0,  0,  0,  0, 29,  0,  0],
       [ 0,  2,  0,  0,  0,  0,  0,  0, 29,  3],
       [ 0,  0,  0,  2,  0,  0,  0,  0,  0, 37]])`;

const step12 = `%matplotlib inline
import matplotlib.pyplot as plt
import seaborn as sn
plt.figure(figsize=(10,7))
sn.heatmap(cm,annot=True)
plt.xlabel('Predicted')
plt.ylabel('Truth')`;

export default RandForest;
