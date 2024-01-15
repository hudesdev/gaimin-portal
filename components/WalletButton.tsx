
import {
	WalletConnectButton,
	WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

type WalletButtonProps = {
	className: string;
};

const WalletButton = ({ className }: WalletButtonProps) => {
	return (
		<div
			className={`z-40 flex items-center justify-center text-light shadow-lg ${className}`}
		>
			<WalletMultiButton className="wallet-custom" />
		</div>
	);
};

export default WalletButton;
