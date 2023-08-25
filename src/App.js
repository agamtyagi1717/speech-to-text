import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import logo from './assets/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() { 
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
    toast("Listening...");
  }
  const stopListening = () => {
    SpeechRecognition.stopListening();
    toast("Stopped listening...");
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

        <img className="lg:w-1/12 md:w-1/6 w-2/6 mb-10 object-cover object-center rounded" alt="hero" src={logo} />

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Speech to Text Convertor
          </h1>
          <p className="leading-relaxed mb-8">
            Made using ReactJS and Tailwind CSS
          </p>
          
          {/* <label class="relative inline-flex items-center cursor-pointer mb-5">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-500"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Lightmode</span>
          </label> */}

          <div className="flex justify-center">
            <button onClick={startListening} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Start listening
            </button>
            <button onClick={stopListening} className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Stop Listening
            </button>

          </div>
          <div className=" container bg-gray-800 border border-indigo-500 mx-auto flex items-center justify-center flex-col my-8">
            {transcript}
          </div>          

          <p className="leading-relaxed mb-8">
           © Agam Tyagi
          </p>
        </div>
      </div>
      <ToastContainer position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}

export default App;
