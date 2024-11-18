export function truncateAddress(address: string, length: number = 8) {
	return `${address.slice(0, length)}...${address.slice(-length)}`;
}
