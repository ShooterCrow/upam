import React, { useRef } from 'react';
import { Bold, List, Link as LinkIcon, Info } from 'lucide-react';

const RichTextEditor = ({ value, onChange, placeholder, label }) => {
  const textareaRef = useRef(null);

  const insertTag = (startTag, endTag) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const selected = text.substring(start, end);
    const after = text.substring(end);

    const newText = before + startTag + selected + endTag + after;
    
    // Simulate event for parent component
    const event = {
      target: {
        name: textarea.name,
        value: newText
      }
    };
    onChange(event);

    // Focus back and set selection
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + startTag.length + selected.length + endTag.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleBold = () => insertTag('<b>', '</b>');
  const handleList = () => insertTag('<ul>\n  <li>', '</li>\n</ul>');
  const handleLink = () => {
    const url = prompt('Enter URL:', 'https://');
    if (url) {
      insertTag(`<a href="${url}" target="_blank">`, '</a>');
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-bold text-slate-700">{label}</label>}
      <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
        {/* Toolbar */}
        <div className="flex border-b border-slate-200 p-2 gap-2 bg-white">
          <button
            type="button"
            onClick={handleBold}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
            title="Bold"
          >
            <Bold size={18} />
          </button>
          <button
            type="button"
            onClick={handleList}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
            title="Bullet List"
          >
            <List size={18} />
          </button>
          <button
            type="button"
            onClick={handleLink}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
            title="Insert Link"
          >
            <LinkIcon size={18} />
          </button>
          <div className="ml-auto flex items-center text-[10px] text-slate-400 gap-1 px-2">
            <Info size={12} /> HTML Supported
          </div>
        </div>
        
        {/* Textarea */}
        <textarea
          ref={textareaRef}
          name="description"
          rows="4"
          required
          className="w-full px-4 py-3 bg-transparent border-none focus:ring-0 transition-all resize-none font-medium min-h-[150px]"
          placeholder={placeholder || "Detailed description..."}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default RichTextEditor;
