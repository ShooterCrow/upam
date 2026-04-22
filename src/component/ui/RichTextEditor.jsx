import React, { useRef } from 'react';
import { Bold, List, Link as LinkIcon, Info, User as UserIcon } from 'lucide-react';

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

  const PLACEHOLDERS = [
    { label: 'Full Name', value: '{{name}}' },
    { label: 'First Name', value: '{{firstName}}' },
    { label: 'Last Name', value: '{{lastName}}' },
    { label: 'Email', value: '{{email}}' },
    { label: 'Member ID', value: '{{member_id}}' },
    { label: 'Imported ID', value: '{{importedMember_id}}' },
    { label: 'Username', value: '{{userName}}' },
    { label: 'Membership Type', value: '{{membershipType}}' },
    { label: 'Country', value: '{{country}}' },
    { label: 'City', value: '{{city}}' },
    { label: 'State', value: '{{state}}' },
    { label: 'Address', value: '{{address}}' },
    { label: 'Phone', value: '{{phone}}' },
    { label: 'Chapter', value: '{{chapter}}' },
    { label: 'Position', value: '{{position}}' },
    { label: 'Title', value: '{{title}}' },
    { label: 'Gender', value: '{{gender}}' },
    { label: 'DOB', value: '{{dob}}' },
    { label: 'Reside', value: '{{reside}}' },
    { label: 'Origin Country', value: '{{originCountry}}' },
    { label: 'Roles', value: '{{roles}}' },
    { label: 'Email Verified', value: '{{emailVerified}}' },
    { label: 'Created At', value: '{{createdAt}}' },
  ];

  const handlePlaceholderChange = (e) => {
    const placeholder = e.target.value;
    if (placeholder) {
      insertTag(placeholder, '');
      // Reset dropdown
      e.target.value = '';
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

          <div className="h-6 w-[1px] bg-slate-200 self-center mx-1"></div>

          <div className="flex items-center gap-2">
            <UserIcon size={16} className="text-blue-500" />
            <select
              onChange={handlePlaceholderChange}
              className="text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 focus:ring-1 focus:ring-blue-500 outline-none cursor-pointer hover:bg-white transition-all max-w-[140px]"
              defaultValue=""
            >
              <option value="" disabled>Personalization Tags</option>
              {PLACEHOLDERS.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
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
