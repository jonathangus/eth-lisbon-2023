import { Dropdown, Radio } from '@nextui-org/react';
import { useTokens } from '../hooks/useTokens';
import { useSelectionStore } from '../store/useSelectionStore';
import { useAccount } from 'wagmi';

const SelectHandle = () => {
  const { address } = useAccount();
  const { data: tokens = [] } = useTokens();
  const handles = [
    ...tokens
      .filter((token) => token.ownedBy.toLowerCase() === address?.toLowerCase())
      .map((token) => token.handle),
  ];
  const setToken = useSelectionStore((state) => state.setToken);
  const selectedToken = useSelectionStore((state) => state.selectedToken);
  const selectedHandle = selectedToken?.handle;

  if (!address) {
    return <div />;
  }

  if (handles.length === 0) {
    return <div />;
  }

  return (
    <Dropdown>
      <Dropdown.Button flat>
        {selectedHandle || 'select account'}
      </Dropdown.Button>

      <Dropdown.Menu
        onAction={(val) => {
          const token = tokens.find((tok) => tok.handle === val);
          if (token) {
            setToken(token);
          }
        }}
        aria-label="account"
      >
        {handles.map((handle) => (
          <Dropdown.Item key={handle}>{handle}.lens</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SelectHandle;
