export default class SolanaWallet {
    constructor(wallet) {
        // `wallet` is the object from useWallet() or an equivalent Solana wallet interface
        this.wallet = wallet;
    }

    async connect() {
        if (!this.wallet.connected) {
            await this.wallet.connect();
        }
    }

    async disconnect() {
        if (this.wallet.disconnect) {
            await this.wallet.disconnect();
        }
    }

    isConnected() {
        return this.wallet.connected;
    }

    getPublicKey() {
        return this.wallet.publicKey ? this.wallet.publicKey.toBase58() : null;
    }

    async signMessage(message) {
        if (!this.wallet.signMessage) {
            throw new Error('This wallet does not support message signing');
        }
        return this.wallet.signMessage(message);
    }
}
