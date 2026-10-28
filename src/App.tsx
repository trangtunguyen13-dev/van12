import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { EssayViewer } from './components/EssayViewer';
import { ComparativeMatrix } from './components/ComparativeMatrix';
import { RubricGuide } from './components/RubricGuide';
import { TheoryPocketbook } from './components/TheoryPocketbook';
import { CustomComparator } from './components/CustomComparator';
import { MASTER_COMPARISONS } from './data/masterEssays';

export default function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('taytien-dongchi');
  const [activeTab, setActiveTab] = useState<'essay' | 'matrix' | 'rubric' | 'theory' | 'custom'>('essay');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const currentTopic = MASTER_COMPARISONS.find((t) => t.id === selectedTopicId) || MASTER_COMPARISONS[0];

  // Text to speech implementation
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn không hỗ trợ tính năng đọc văn bản.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Prepare text to read
    const textToRead = currentTopic.essay.sections
      .map((s) => `${s.title}. ${s.content.join(' ')}`)
      .join(' ');

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.95;

    // Pick Vietnamese voice if available
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find((v) => v.lang.includes('vi') || v.lang.includes('VN'));
    if (viVoice) {
      utterance.voice = viVoice;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2523]">
      {/* Sticky Header with Navigation and Academic Brand */}
      <Header
        topics={MASTER_COMPARISONS}
        selectedTopicId={selectedTopicId}
        onSelectTopic={(id) => {
          setSelectedTopicId(id);
          if (isSpeaking && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
          }
        }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSpeaking={isSpeaking}
        onToggleSpeech={handleToggleSpeech}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'essay' && <EssayViewer topic={currentTopic} />}
        {activeTab === 'matrix' && <ComparativeMatrix topic={currentTopic} />}
        {activeTab === 'rubric' && <RubricGuide />}
        {activeTab === 'theory' && <TheoryPocketbook />}
        {activeTab === 'custom' && <CustomComparator />}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E8DFC8] bg-[#F4EDE0] py-6 text-xs text-[#7A6B63] no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#1F1917]">Thi Văn 12</span>
            <span>Chuyên đề so sánh 2 tác phẩm thơ đạt điểm 9+</span>
          </div>
          <div className="flex items-center gap-4 text-center sm:text-right">
            <span>Dành cho học sinh lớp 12 &amp; giáo viên bồi dưỡng HSG</span>
            <span aria-hidden="true">·</span>
            <span>Chương trình GDPT mới 2018 / 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
