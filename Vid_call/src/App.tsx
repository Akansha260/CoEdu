import React, { useEffect, useRef, useState } from 'react';
import { Camera, Mic, MicOff, Monitor, PhoneOff, Video, VideoOff } from 'lucide-react';

function App() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    startMedia();
  }, []);

  const startMedia = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      setStream(mediaStream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const toggleAudio = () => {
    if (stream) {
      stream.getAudioTracks().forEach(track => {
        track.enabled = !isAudioEnabled;
      });
      setIsAudioEnabled(!isAudioEnabled);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      stream.getVideoTracks().forEach(track => {
        track.enabled = !isVideoEnabled;
      });
      setIsVideoEnabled(!isVideoEnabled);
    }
  };

  const toggleScreenShare = async () => {
    try {
      if (!isScreenSharing) {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = screenStream;
        }
        setIsScreenSharing(true);
      } else {
        if (stream && localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
        setIsScreenSharing(false);
      }
    } catch (error) {
      console.error("Error toggling screen share:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-center">Video Call</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Local Video */}
          <div className="relative rounded-xl overflow-hidden bg-gray-800 aspect-video">
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-gray-900 bg-opacity-75 px-3 py-1 rounded-lg">
              <p className="text-sm">You</p>
            </div>
          </div>

          {/* Remote Video (Placeholder) */}
          <div className="relative rounded-xl overflow-hidden bg-gray-800 aspect-video flex items-center justify-center">
            <div className="text-center">
              <Camera className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400">Waiting for others to join...</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-center gap-4">
              {/* Audio Toggle */}
              <button
                onClick={toggleAudio}
                className={`p-4 rounded-full ${
                  isAudioEnabled ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-500 hover:bg-red-600'
                } transition-colors`}
              >
                {isAudioEnabled ? (
                  <Mic className="w-6 h-6" />
                ) : (
                  <MicOff className="w-6 h-6" />
                )}
              </button>

              {/* Video Toggle */}
              <button
                onClick={toggleVideo}
                className={`p-4 rounded-full ${
                  isVideoEnabled ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-500 hover:bg-red-600'
                } transition-colors`}
              >
                {isVideoEnabled ? (
                  <Video className="w-6 h-6" />
                ) : (
                  <VideoOff className="w-6 h-6" />
                )}
              </button>

              {/* Screen Share */}
              <button
                onClick={toggleScreenShare}
                className={`p-4 rounded-full ${
                  isScreenSharing ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-700 hover:bg-gray-600'
                } transition-colors`}
              >
                <Monitor className="w-6 h-6" />
              </button>

              {/* End Call */}
              <button
                onClick={() => {}}
                className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              >
                <PhoneOff className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;