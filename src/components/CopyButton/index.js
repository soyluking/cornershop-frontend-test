import Button from '../Button';
import useClipboard from 'react-use-clipboard';

const CopyButton = ({ textToCopy }) => {
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  return (
    <Button color='warning' kind='raised' onClick={() => setCopied()}>
      {isCopied ? 'Copied 👍' : 'Copy'}
    </Button>
  );
};

export default CopyButton;
