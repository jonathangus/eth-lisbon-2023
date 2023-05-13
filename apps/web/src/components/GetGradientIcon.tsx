type Props = { tokenId: number; rounded?: boolean };

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

var stringToColour = function (str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
};

const GetGradientIcon = ({ tokenId, rounded = true, ...props }: Props) => {
  const color = stringToColour((tokenId * 100).toString() + tokenId);
  const rgb = hexToRgb(color);

  return (
    <div
      className={
        'aspect-square     overflow-hidden  ' + (rounded ? 'rounded-full' : '')
      }
    >
      <div
        className="w-full h-full"
        style={{
          background: `linear-gradient(225deg, ${color} 16.16%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25) 81.72%)`,
        }}
      ></div>
    </div>
  );
};

export default GetGradientIcon;
