import { TBAToken } from 'shared-config';
import { Text, Avatar } from '@nextui-org/react';
import img from './LENS-profile.gif';

type Props = {};

const items = [
  {
    name: 'test',
    img,
  },
  {
    name: 'user',
    img,
  },
  {
    name: 'stani',
    img,
  },
];

const CollectedPosts = ({}: Props) => {
  return (
    <div>
      <Text h2>Lens follower NFTs</Text>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.name} className="relative">
            <img src={item.img.src} />
            <div className="absolute w-full text-center bottom-2 z-20">
              {item.name}.lens follower
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectedPosts;
