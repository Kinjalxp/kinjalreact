import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import LightboxImage from "../../components/LightboxImage";

import pcaBanner from "../../assets/pcaCaveman.png";
import img1 from "../../assets/PCAimg1.png";
// import img2 from "../../assets/PCAImg2.png";

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
          <LightboxImage
            src={image}
            alt={imageAlt ?? "Step output"}
            className="rounded-lg border border-gray-200 w-full object-contain"
          />
        </div>
      )}
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          {images.map((src, i) => (
            <LightboxImage
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

const PCA = () => (
  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-2">Principal Component Analysis</h1>
    <p className="text-gray-500 mb-8">
      A step-by-step walkthrough of applying PCA to reduce the dimensionality of
      the handwritten digits dataset.
    </p>

    {
      <LightboxImage
        src={pcaBanner}
        alt="PCA overview"
        className="rounded-lg border border-gray-200 w-full object-contain mb-8"
      />
    }

    <Step
      number={1}
      title="Import Libraries and Load the Dataset"
      description="We import the required libraries and load the handwritten digits dataset from Scikit-learn."
      code={step1}
      //output={}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={2}
      title="Explore the Dataset Structure"
      description="We examine the available attributes of the dataset to better understand its contents."
      code={step2}
      output={step2Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={3}
      title="Check the Dataset Dimensions"
      description="We view the shape of the feature matrix to see how many samples and features are included."
      code={step3}
      output={step3Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={4}
      title="Visualize a Digit Image"
      description="We reshape the pixel data into an 8×8 grid to view the original handwritten digit image."
      code={step4}
      output={step4Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={5}
      title="Display a Sample Digit"
      description="We visualize one of the digit images to better understand the data being used for classification."
      code={step5}
      //output={step5Output}
      // note=""
      image={img1}
      // imageAlt=""
    />

    <Step
      number={6}
      title="View the Available Classes"
      description="We identify the unique digit labels present in the dataset."
      code={step6}
      output={step6Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={7}
      title="Check the Label of a Sample"
      description="We view the target value corresponding to the displayed digit image."
      code={step7}
      output={step7Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={8}
      title="Create a DataFrame"
      description="We convert the feature data into a Pandas DataFrame for easier exploration and analysis."
      code={step8}
      output={step8Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={9}
      title="Explore Feature Statistics"
      description="We generate summary statistics to better understand the distribution of the pixel values."
      code={step9}
      output={step9Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={10}
      title="Define Features and Target"
      description="We separate the dataset into input features (X) and target labels (y)."
      code={step10}
      //output={step10Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={11}
      title="Standardize the Features"
      description="We scale the feature values so that each feature contributes equally during model training."
      code={step11}
      output={step11Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={12}
      title="Split the Dataset"
      description="We divide the data into training and testing sets for model training and evaluation."
      code={step12}
      //output={step12Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={13}
      title="Train a Baseline Logistic Regression Model"
      description="We train a Logistic Regression model using all available features and evaluate its accuracy."
      code={step13}
      output={step13Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={14}
      title="Apply PCA for Dimensionality Reduction"
      description="We use Principal Component Analysis (PCA) to reduce the number of features while retaining 95% of the dataset's variance."
      code={step14}
      output={step14Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={15}
      title="Examine Explained Variance"
      description="We view the proportion of variance captured by each principal component."
      code={step15}
      output={step15Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={16}
      title="Check the Number of Components"
      description="We determine how many principal components are needed to preserve 95% of the original information."
      code={step16}
      output={step16Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={17}
      title="Split the PCA-Transformed Data"
      description="We divide the reduced dataset into training and testing sets."
      code={step17}
      //output={step17Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={18}
      title="Train Logistic Regression on PCA Features"
      description="We train and evaluate a Logistic Regression model using the PCA-transformed features."
      code={step18}
      output={step18Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={19}
      title="Reduce the Dataset to Two Principal Components"
      description="We apply PCA again, this time reducing the dataset to only two principal components."
      code={step19}
      output={step19Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={20}
      title="View the Transformed Data"
      description="We examine the new two-dimensional representation of the dataset."
      code={step20}
      output={step20Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={21}
      title="Analyze Variance Retention"
      description="We evaluate how much of the original information is preserved by the two principal components."
      code={step21}
      output={step21Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={22}
      title="Train Logistic Regression with Two Components"
      description="We train and evaluate a Logistic Regression model using only two principal components to compare performance against the higher-dimensional versions."
      code={step22}
      output={step22Output}
      // note=""
      // image={img1}
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
from sklearn.datasets import load_digits`;

const step2 = `dataset = load_digits()
dataset.keys()`;
const step2Output = `dict_keys(['data', 'target', 'frame', 'feature_names', 'target_names', 'images', 'DESCR'])`;

const step3 = `dataset.data.shape`;
const step3Output = `(1797, 64)`;

const step4 = `dataset.data[0].reshape(8,8)`;
const step4Output = `array([[ 0.,  0.,  5., 13.,  9.,  1.,  0.,  0.],
       [ 0.,  0., 13., 15., 10., 15.,  5.,  0.],
       [ 0.,  3., 15.,  2.,  0., 11.,  8.,  0.],
       [ 0.,  4., 12.,  0.,  0.,  8.,  8.,  0.],
       [ 0.,  5.,  8.,  0.,  0.,  9.,  8.,  0.],
       [ 0.,  4., 11.,  0.,  1., 12.,  7.,  0.],
       [ 0.,  2., 14.,  5., 10., 12.,  0.,  0.],
       [ 0.,  0.,  6., 13., 10.,  0.,  0.,  0.]])`;

const step5 = `from matplotlib import pyplot as plt 
%matplotlib inline

plt.gray()
plt.matshow(dataset.data[9].reshape(8,8))`;

const step6 = `import numpy as np
np.unique(dataset.target)`;
const step6Output = `array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])`;

const step7 = `dataset.target[9]`;
const step7Output = `9`;

const step8 = `df = pd.DataFrame(dataset.data, columns=dataset.feature_names)
df.head()`;
const step8Output = `   pixel_0_0  pixel_0_1  pixel_0_2  ...  pixel_7_6  pixel_7_7
0        0.0        0.0        5.0  ...        0.0        0.0
1        0.0        0.0        0.0  ...        0.0        0.0
2        0.0        0.0        0.0  ...        9.0        0.0
3        0.0        0.0        7.0  ...        0.0        0.0
4        0.0        0.0        0.0  ...        0.0        0.0

[5 rows x 64 columns]`;

const step9 = `df.describe()`;
const step9Output = `        pixel_0_0  pixel_0_1  pixel_0_2  ...  pixel_7_6  pixel_7_7
count     1797.00    1797.00    1797.00  ...    1797.00    1797.00
mean         0.00       0.30       5.20  ...       2.07       0.36
std          0.00       0.91       4.75  ...       4.09       1.86
min          0.00       0.00       0.00  ...       0.00       0.00
25%          0.00       0.00       1.00  ...       0.00       0.00
50%          0.00       0.00       4.00  ...       0.00       0.00
75%          0.00       0.00       9.00  ...       2.00       0.00
max          0.00       8.00      16.00  ...      16.00      16.00

[8 rows x 64 columns]`;

const step10 = `X = df 
y = dataset.target`;

const step11 = `from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
X_scaled`;
const step11Output = `array([[ 0.        , -0.33501649, -0.04308102, ..., -1.14664746,
        -0.5056698 , -0.19600752],
       [ 0.        , -0.33501649, -1.09493684, ...,  0.54856067,
        -0.5056698 , -0.19600752],
       [ 0.        , -0.33501649, -1.09493684, ...,  1.56568555,
         1.6951369 , -0.19600752],
       ...,
       [ 0.        , -0.33501649, -0.88456568, ..., -0.12952258,
        -0.5056698 , -0.19600752],
       [ 0.        , -0.33501649, -0.67419451, ...,  0.8876023 ,
        -0.5056698 , -0.19600752],
       [ 0.        , -0.33501649,  1.00877481, ...,  0.8876023 ,
        -0.26113572, -0.19600752]])`;

const step12 = `from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size = 0.2, random_state = 30)`;

const step13 = `from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)
model.score(X_test,y_test)`;
const step13Output = `0.9722222222222222`;

const step14 = `from sklearn.decomposition import PCA

pca = PCA(0.95)

X_pca = pca.fit_transform(X)
X_pca.shape`;
const step14Output = `(1797, 29)`;

const step15 = `pca.explained_variance_ratio_`;
const step15Output = `array([0.14890594, 0.13618771, 0.11794594, 0.08409979, 0.05782415,
       0.0491691 , 0.04315987, 0.03661373, 0.03353248, 0.03078806,
       0.02372341, 0.02272697, 0.01821863, 0.01773855, 0.01467101,
       0.01409716, 0.01318589, 0.01248138, 0.01017718, 0.00905617,
       0.00889538, 0.00797123, 0.00767493, 0.00722904, 0.00695889,
       0.00596081, 0.00575615, 0.00515158, 0.0048954 ])`;

const step16 = `pca.n_components_`;
const step16Output = `29`;

const step17 = `X_train_pca, X_test_pca, y_train, y_test = train_test_split(X_pca, y, test_size = 0.2, random_state = 30)`;

const step18 = `model = LogisticRegression(max_iter = 1000)
model.fit(X_train_pca,y_train)
model.score(X_test_pca,y_test)`;
const step18Output = `0.9694444444444444`;

const step19 = `pca = PCA(n_components = 2)
X_pca = pca.fit_transform(X)
X_pca.shape`;
const step19Output = `(1797, 2)`;

const step20 = `X_pca`;
const step20Output = `array([[ -1.25946645, -21.27488348],
       [  7.9576113 ,  20.76869896],
       [  6.99192297,   9.95598641],
       ...,
       [ 10.8012837 ,   6.96025223],
       [ -4.87210009, -12.42395362],
       [ -0.34438963,  -6.36554919]])`;

const step21 = `pca.explained_variance_ratio_`;
const step21Output = `array([0.14890594, 0.13618771])`;

const step22 = `X_train_pca, X_test_pca, y_train, y_test = train_test_split(X_pca, y, test_size = 0.2, random_state = 30)

model = LogisticRegression(max_iter = 1000)
model.fit(X_train_pca,y_train)
model.score(X_test_pca,y_test)`;
const step22Output = `0.6083333333333333`;

export default PCA;
