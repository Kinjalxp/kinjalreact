const Intro = () => (
  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-4">Introduction to Algorithms</h1>
    <p className="italic text-gray-500 mb-4">Notes coming soon — this page is a placeholder.</p>
    <hr className="mb-4" />
    <p className="mb-4">
      An <strong>algorithm</strong> is a finite sequence of well-defined instructions used to solve a problem or perform a computation.
    </p>

    <h2 className="text-2xl font-bold mb-4">Why Algorithms Matter</h2>
    <ul className="list-disc pl-6 space-y-1 mb-4">
      <li>They determine <em>how efficiently</em> a program runs.</li>
      <li>A bad algorithm on fast hardware can still be slower than a good algorithm on slow hardware.</li>
      <li>Understanding algorithms is fundamental to computer science and AI.</li>
    </ul>

    <h2 className="text-2xl font-bold mb-4">Key Properties</h2>
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Property</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Correctness</td>
            <td className="border border-gray-300 px-4 py-2">Produces the right output for every valid input</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 font-semibold">Efficiency</td>
            <td className="border border-gray-300 px-4 py-2">Uses time and space resources wisely</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Finiteness</td>
            <td className="border border-gray-300 px-4 py-2">Always terminates in a finite number of steps</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 font-semibold">Definiteness</td>
            <td className="border border-gray-300 px-4 py-2">Each step is precisely defined</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mb-4">Measuring Efficiency — Big-O Notation</h2>
    <p className="mb-4">
      Big-O describes the <em>worst-case</em> growth rate of an algorithm as input size <code className="bg-gray-100 px-1 rounded">n</code> grows:
    </p>
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Notation</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-mono">O(1)</td>
            <td className="border border-gray-300 px-4 py-2">Constant</td>
            <td className="border border-gray-300 px-4 py-2">Array index access</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 font-mono">O(log n)</td>
            <td className="border border-gray-300 px-4 py-2">Logarithmic</td>
            <td className="border border-gray-300 px-4 py-2">Binary search</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-mono">O(n)</td>
            <td className="border border-gray-300 px-4 py-2">Linear</td>
            <td className="border border-gray-300 px-4 py-2">Linear search</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 font-mono">O(n log n)</td>
            <td className="border border-gray-300 px-4 py-2">Linearithmic</td>
            <td className="border border-gray-300 px-4 py-2">Merge sort</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-mono">O(n²)</td>
            <td className="border border-gray-300 px-4 py-2">Quadratic</td>
            <td className="border border-gray-300 px-4 py-2">Bubble sort</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 font-mono">O(2ⁿ)</td>
            <td className="border border-gray-300 px-4 py-2">Exponential</td>
            <td className="border border-gray-300 px-4 py-2">Naive Fibonacci</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mb-4">Coming Up in This Section</h2>
    <ul className="list-disc pl-6 space-y-1 mb-4">
      <li>Sorting algorithms (bubble, merge, quick, heap)</li>
      <li>Searching algorithms (linear, binary)</li>
      <li>Graph algorithms (BFS, DFS, Dijkstra)</li>
      <li>Dynamic programming fundamentals</li>
    </ul>
  </div>
);

export default Intro;
