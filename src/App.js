import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import logo from './assets/logo.png'

function App() { 
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => {
    SpeechRecognition.stopListening();
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
    </section>
  );
}

export default App;
