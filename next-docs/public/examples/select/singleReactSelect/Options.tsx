import React, { useState } from 'react';
import { Select } from '@heathmont/moon-select';

const options = [
  { label: 'English', value: 'en', flag: '🇬🇧' },
  { label: 'Japanese', value: 'ja', flag: '🇯🇵' },
  { label: 'Russian', value: 'ru', flag: '🇷🇺' },
  { label: 'Portuguese', value: 'pt', flag: '🇧🇷' },
  { label: 'Chinese', value: 'zh', flag: '🇨🇳' },
  { label: 'Spanish', value: 'es', flag: '🇪🇸' },
  { label: 'Korean', value: 'ko', flag: '🇰🇷' },
  { label: 'Thai', value: 'th', flag: '🇹🇭' },
  { label: 'German', value: 'de', flag: '🇩🇪' },
  { label: 'Turkish', value: 'tr', flag: '🇹🇷' },
  { label: 'Estonian', value: 'et', flag: '🇪🇪' },
  { label: 'Swedish', value: 'sv', flag: '🇸🇪' },
  { label: 'French', value: 'fr', flag: '🇫🇷' },
  { label: 'Finnish', value: 'fi', flag: '🇫🇮' },
  { label: 'Vietnamese', value: 'vi', flag: '🇻🇳' },
  { label: 'Not set', value: 'default', flag: '🏳️' },
];

const Example = () => {
  const [option, setOption] = useState(options[0]);
  const [option2, setOption2] = useState(options[0]);
  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Select
        options={options}
        label="Language"
        value={option}
        onChange={(opt: any) => opt && setOption(opt as any)}
        isSearchable
        leftSlot={<div className="mx-2">{option.flag}</div>}
        formatOptionLabel={(data: any) => (
          <div className="flex ">
            <div className="me-4">{data.flag}</div>
            <div>{data.label}</div>
          </div>
        )}
      />
      <Select
        size="xLarge"
        options={options}
        label="Language"
        value={option2}
        onChange={(opt) => opt && setOption2(opt as any)}
        isSearchable
        leftSlot={<div className="mx-2">{option2.flag}</div>}
        formatOptionLabel={(data) => (
          <div className="flex ">
            <div className="me-4">{data.flag}</div>
            <div>{data.label}</div>
          </div>
        )}
      />
    </div>
  );
};

export default Example;
