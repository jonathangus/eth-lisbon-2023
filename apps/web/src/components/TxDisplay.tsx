import { Text } from '@nextui-org/react';

type Props = {
  hash?: string;
};

export const formatAddressToShort = (
  address: string,
  options?: { start?: number; end?: number }
): string =>
  [
    address.slice(0, options?.start || 12),
    '...',
    address.slice(-(options?.end || 12)),
  ].join('');

const TxDisplay = ({ hash }: Props) => {
  if (hash) {
    return (
      <Text blockquote>
        <a
          href={`https://mumbai.polygonscan.com/tx/${hash}`}
          target="_blank"
          rel="noreferrer"
        >
          {formatAddressToShort(hash)}
        </a>
      </Text>
    );
  }

  return null;
};

export default TxDisplay;
