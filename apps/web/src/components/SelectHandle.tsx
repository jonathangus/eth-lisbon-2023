import { Dropdown, Radio } from '@nextui-org/react';
import { useTokens } from '../hooks/useTokens';
import { useSelectionStore } from '../store/useSelectionStore';

const hardCodedHandles = ['devdev.test', 'stani.test', 'nader.test'];

const SelectHandle = () => {
  const { data: tokens = [] } = useTokens();
  const handles = [...tokens.map((token) => token.handle)];
  const setToken = useSelectionStore((state) => state.setToken);
  const selectedToken = useSelectionStore((state) => state.selectedToken);
  const selectedHandle = selectedToken?.handle;

  return (
    <div>
      <div>
        Select one of yours nfts and execute transactions from that token bound
        account
      </div>

      <Radio.Group
        orientation="horizontal"
        className="flex-wrap"
        value={selectedHandle}
        onChange={(value) => {
          const token = tokens.find((tok) => tok.handle === value);
          if (token) {
            setToken(token);
          }
        }}
      >
        {handles.map((handle) => (
          <Radio key={handle} value={handle} color="primary">
            {handle}.lens
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default SelectHandle;
