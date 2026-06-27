import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

import img1 from "../../assets/kMeansImg1.png";
import img2 from "../../assets/kMeansImg2.png";
import img3 from "../../assets/kMeansImg3.png";
import img4 from "../../assets/kMeansImg4.png";
import kMeansBanner from "../../assets/kMeansCaveman.png";
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

const KMeans = () => (
  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-2">K-Means Clustering</h1>
    <p className="text-gray-500 mb-6">
      A step-by-step walkthrough of clustering customers by age and income using
      K-Means.
    </p>
    {
      <LightboxImage
        src={kMeansBanner}
        alt="K-means clustering overview"
        className="rounded-lg border border-gray-200 w-full object-contain mb-8"
      />
    }

    <Step
      number={1}
      title="Import Libraries"
      description="We import the required libraries for data visualization, feature scaling, and K-Means clustering."
      code={step1}
      //output={step1Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={2}
      title="Load the Dataset"
      description="We load the income dataset into a Pandas DataFrame to begin exploring the relationship between age and income."
      code={step2}
      output={step2Output}
      // note=""
      // image={img1}
      // imageAlt=""
    />

    <Step
      number={3}
      title="Visualize the Data"
      description="We create a scatter plot to visualize the distribution of individuals based on their age and income before applying clustering."
      code={step3}
      //output={step3Output}
      // note=""
      image={img1}
      // imageAlt=""
    />

    <Step
      number={4}
      title="Create the K-Means Model"
      description="We initialize a K-Means model with three clusters, specifying the number of groups we want the algorithm to identify."
      code={step4}
      output={step4Output}
      // note=""
      //image={img1}
      // imageAlt=""
    />

    <Step
      number={5}
      title="Fit the Model and Assign Clusters"
      description="We train the K-Means model and assign each data point to one of the three clusters."
      code={step5}
      output={step5Output}
      // note=""
      //image={img1}
      // imageAlt=""
    />

    <Step
      number={6}
      title="Add Cluster Labels"
      description="We add the predicted cluster labels to the dataset for easier analysis and visualization."
      code={step6}
      output={step6Output}
      // note=""
      //image={img1}
      // imageAlt=""
    />

    <Step
      number={7}
      title="Visualize the Initial Clusters"
      description="We plot the clustered data to observe how the K-Means algorithm grouped individuals based on age and income."
      code={step7}
      //output={step6Output}
      // note=""
      image={img2}
      // imageAlt=""
    />

    <Step
      number={8}
      title="Scale the Features"
      description="We normalize the age and income features using Min-Max scaling so that both variables contribute equally during clustering."
      code={step8}
      output={step8Output}
      // note=""
      //image={img2}
      // imageAlt=""
    />

    <Step
      number={9}
      title="Reapply the K-Means Algorithm"
      description="We train the K-Means model again using the scaled features to improve clustering performance."
      code={step9}
      output={step9Output}
      // note=""
      //image={img2}
      // imageAlt=""
    />

    <Step
      number={10}
      title="Update the Cluster Labels"
      description="We store the new cluster assignments generated from the scaled dataset."
      code={step10}
      output={step10Output}
      // note=""
      //image={img2}
      // imageAlt=""
    />

    <Step
      number={11}
      title="View the Cluster Centroids"
      description="We examine the coordinates of the cluster centroids, which represent the center of each cluster."
      code={step11}
      output={step11Output}
      // note=""
      //image={img2}
      // imageAlt=""
    />

    <Step
      number={12}
      title="Visualize the Final Clusters"
      description="We plot the scaled data along with the cluster centroids to visualize the final clustering results."
      code={step12}
      //output={step12Output}
      // note=""
      image={img3}
      // imageAlt=""
    />

    <Step
      number={13}
      title="Calculate the Sum of Squared Errors (SSE)"
      description="We compute the Sum of Squared Errors (SSE) for different values of k to evaluate the quality of the clustering."
      code={step13}
      output={step13Output}
      // note=""
      //image={img3}
      // imageAlt=""
    />

    <Step
      number={14}
      title="Apply the Elbow Method"
      description="We plot the SSE values against the number of clusters to identify the optimal value of k using the Elbow Method."
      code={step14}
      //output={step13Output}
      // note=""
      image={img4}
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

const step1 = `from sklearn.cluster import KMeans
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from matplotlib import pyplot as plt 
%matplotlib inline`;

const step2 = `df = pd.read_csv("/content/sample_data/income.csv")
df.head()`;
const step2Output = `	Name	Age	  Income($)
0	Rob	    27	   70000
1	Micheal	29	   90000
2	Mohan	29	   61000
3	Ismail	28	   60000
4	Kory	42	   150000`;

const step3 = `plt.scatter(df['Age'],df['Income($)'])`;

const step4 = `km = KMeans(n_clusters=3)
km`;
const step4Output = `KMeans(n_clusters=3)`;

const step5 = `y_predicted = km.fit_predict(df[['Age','Income($)']])
y_predicted`;
const step5Output = `array([1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      dtype=int32)`;

const step6 = `df['cluster'] = y_predicted
df.head()`;
const step6Output = `	Name	Age	  Income($)	cluster
0	Rob	    27	   70000	  1
1	Micheal	29	   90000	  1
2	Mohan	29	   61000	  1
3	Ismail	28	   60000	  1
4	Kory	42	   150000	  0`;

const step7 = `df1 = df[df.cluster==0]
df2 = df[df.cluster==1]
df3 = df[df.cluster==2]
plt.scatter(df1.Age,df1['Income($)'],color = 'green')
plt.scatter(df2.Age,df2['Income($)'],color = 'red')
plt.scatter(df3.Age,df3['Income($)'],color = 'black')

plt.xlabel('Age')
plt.ylabel('Income($)')
plt.legend()`;

const step8 = `scaler = MinMaxScaler()
scaler.fit(df[['Income($)']])
df[['Income($)']] = scaler.transform(df[['Income($)']])

scaler.fit(df[['Age']])
df['Age'] = scaler.transform(df[['Age']])
df
`;
const step8Output = `	Name	  Age	     Income($)	  cluster
0	Rob	      0.058824	  0.213675	   1
1	Micheal	  0.176471	  0.384615	   1
2	Mohan	  0.176471	  0.136752	   1
3	Ismail	  0.117647	  0.128205	   1
4	Kory	  0.941176	  0.897436	   0
5	Gautam	  0.764706	  0.940171	   0
6	David	  0.882353	  0.982906	   0
7	Andrea	  0.705882	  1.000000	   0
8	Brad	  0.588235	  0.948718	   0
9	Angelina  0.529412	  0.726496	   2
10	Donald	  0.647059	  0.786325	   2
11	Tom	      0.000000	  0.000000	   1
12	Arnold	  0.058824	  0.025641	   1
13	Jared	  0.117647	  0.051282	   1
14	Stark	  0.176471	  0.038462	   1
15	Ranbir	  0.352941	  0.068376     1
16	Dipika	  0.823529	  0.170940	   1
17	Priyanka  0.882353	  0.153846	   1
18	Nick	  1.000000	  0.162393	   1
19	Alia	  0.764706	  0.299145	   1
20	Sid	      0.882353	  0.316239     1
21	Abdul	  0.764706	  0.111111     1`;

const step9 = `km = KMeans(n_clusters = 3)
y_predicted = km.fit_predict(df[['Age','Income($)']])
y_predicted`;
const step9Output = `array([1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
      dtype=int32)`;

const step10 = `df['cluster'] = y_predicted
df`;
const step10Output = `	Name	  Age	     Income($)	  cluster
0	Rob	      0.058824	  0.213675	   1
1	Micheal	  0.176471	  0.384615	   1
2	Mohan	  0.176471	  0.136752	   1
3	Ismail	  0.117647	  0.128205	   1
4	Kory	  0.941176	  0.897436	   0
5	Gautam	  0.764706	  0.940171	   0
6	David	  0.882353	  0.982906	   0
7	Andrea	  0.705882	  1.000000	   0
8	Brad	  0.588235	  0.948718	   0
9	Angelina  0.529412	  0.726496	   0
10	Donald	  0.647059	  0.786325	   0
11	Tom	      0.000000	  0.000000	   1
12	Arnold	  0.058824	  0.025641	   1
13	Jared	  0.117647	  0.051282	   1
14	Stark	  0.176471	  0.038462	   1
15	Ranbir	  0.352941	  0.068376     1
16	Dipika	  0.823529	  0.170940	   2
17	Priyanka  0.882353	  0.153846	   2
18	Nick	  1.000000	  0.162393	   2
19	Alia	  0.764706	  0.299145	   2
20	Sid	      0.882353	  0.316239     2
21	Abdul	  0.764706	  0.111111     2
`;

const step11 = `km.cluster_centers_`;
const step11Output = `array([[0.72268908, 0.8974359 ],
       [0.1372549 , 0.11633428],
       [0.85294118, 0.2022792 ]])`;

const step12 = `df1 = df[df.cluster==0]
df2 = df[df.cluster==1]
df3 = df[df.cluster==2]
plt.scatter(df1.Age,df1['Income($)'],color = 'green')
plt.scatter(df2.Age,df2['Income($)'],color = 'red')
plt.scatter(df3.Age,df3['Income($)'],color = 'black')

plt.xlabel('Age')
plt.ylabel('Income($)')
plt.scatter(km.cluster_centers_[:,0],km.cluster_centers_[:,1],color = 'purple',marker='*',label='centroid')
plt.legend()`;

const step13 = `k_rng = range(1,10)
sse = []
for k in k_rng:
  km = KMeans(n_clusters = k)
  km.fit(df[['Age','Income($)']])
  sse.append(km.inertia_)

sse`;
const step13Output = `[5.434011511988179,
 2.4571335359046356,
 0.4750783498553097,
 0.39237665288019463,
 0.32657706599188696,
 0.22589089371465979,
 0.18427868455224797,
 0.1424758252254333,
 0.1307674529334837]`;

const step14 = ``;

export default KMeans;
