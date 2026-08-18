import lstmCaveman from "../../assets/LSTM_Caveman.png";
import LightboxImage from "../../components/LightboxImage";

const LSTM = () => (
  <div className="animate-fadeIn">
    <h1 className="text-3xl font-bold mb-4">Long Short-Term Memory (LSTM)</h1>
    <LightboxImage
      src={lstmCaveman}
      alt="LSTM explained caveman-style"
      className="w-full h-full object-cover rounded-lg mb-6"
    />
    <h2 className="text-xl font-semibold mb-4">What is LSTM?</h2>
    <p className="mb-4 relative">
      Long Short-Term Memory (LSTM) is a type of recurrent neural network (RNN)
      designed to work with sequential data while addressing one of the major
      limitations of traditional RNNs: difficulty remembering information over
      long sequences.
    </p>
    <p className="mb-4 relative">
      LSTMs are particularly useful when earlier information in a sequence is
      important for understanding later information. Examples include
      time-series forecasting, natural language processing, speech recognition,
      and sequence prediction.
    </p>
    <h2 className="text-xl font-semibold mb-4">Why LSTM?</h2>

    <p className="mb-4 relative">
      Traditional RNNs process information sequentially and maintain a hidden
      state that carries information from previous steps. However, as sequences
      become longer, standard RNNs can struggle to preserve important
      information from much earlier in the sequence.
    </p>
    <p className="mb-4 relative">
      LSTMs solve this by giving the network an explicit way to carry
      information across many timesteps largely untouched, and by letting it
      learn when to add, keep, or discard information—rather than being forced
      to rewrite everything at every step.
    </p>
    <p className="mb-4 relative">
      LSTMs address this problem by introducing a cell state and a set of gates
      that control what information should be kept, added, or removed.
    </p>
    <h2 className="text-xl font-semibold mb-4">How Does an LSTM Work?</h2>
    <p className="mb-4 relative">An LSTM cell uses three main gates:</p>
    <div className="mb-4 relative">
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>
          <strong>Forget Gate:</strong> Decides what information from the
          previous cell state should be discarded.
        </li>
        <li>
          <strong>Input Gate:</strong> Determines what new information should be
          stored in the cell state.
        </li>
        <li>
          <strong>Output Gate:</strong> Determines what information from the
          cell state should be used to produce the current hidden state.
        </li>
      </ul>
    </div>
    <p className="mb-4 relative">
      The cell state acts like a pathway for carrying important information
      through the sequence, while the gates regulate how that information
      changes over time.
    </p>
    <h2 className="text-xl font-semibold mb-4">What I Learned</h2>
    <p className="mb-4 relative">
      I learned how LSTMs extend the idea of recurrent neural networks by giving
      the network more control over its memory. Instead of simply passing
      information from one step to the next, an LSTM can selectively remember
      important information and forget information that is no longer useful.
    </p>
    <p className="mb-4 relative">
      This helped me understand why LSTMs can be more effective than traditional
      RNNs for sequences where relationships between events may span many time
      steps.
    </p>
    <h2 className="text-xl font-semibold mb-4">Key Takeaways</h2>
    <div className="mb-4 relative">
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>
          It is a type of <strong>Recurrent Neural Network (RNN)</strong>.
        </li>
        <li>
          They are designed to work with <strong>sequential</strong> data.
        </li>
        <li>
          LSTMs use a <strong>cell state</strong> to carry information through a
          sequence.
        </li>
        <li>
          The <strong>forget, input, and output gates</strong> control the flow
          of information.
        </li>
        <li>
          LSTMs help address the long-term dependency problem associated with
          traditional RNNs.
        </li>
      </ul>
    </div>

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

export default LSTM;
