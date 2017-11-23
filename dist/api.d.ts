import { Configuration } from "./configuration";
export interface FetchAPI {
    (url: string, init?: any): Promise<any>;
}
export interface FetchArgs {
    url: string;
    options: any;
}
export declare class BaseAPI {
    basePath: string;
    fetch: FetchAPI;
    configuration: Configuration;
    constructor(fetch?: FetchAPI, basePath?: string, configuration?: Configuration);
}
export interface Account {
    /**
     * Only returned if imported addresses were involved in transaction
     */
    "involvesWatchonly"?: boolean;
    /**
     * The account name of the receiving account
     */
    "account"?: string;
    /**
     * The total amount received by addresses with this account
     */
    "amount"?: number;
    /**
     * The number of confirmations of the most recent transaction included
     */
    "confirmations"?: number;
    /**
     * A comment for the address/transaction, if any
     */
    "label"?: string;
}
export interface AddMultisigAddressRequest {
    /**
     * The number of required signatures out of the n keys or addresses.
     */
    "nrequired": number;
    /**
     * A json array of syscoin addresses or hex-encoded public keys. [ \"address\"  (string) syscoin address or hex-encoded public key ... ]
     */
    "keysobject": string;
    /**
     * DEPRECATED. An account to assign the addresses to.
     */
    "account"?: string;
}
export interface AddressGrouping {
    /**
     * The syscoin address
     */
    "syscoinaddress"?: string;
    /**
     * The amount in SYS
     */
    "amount"?: number;
    /**
     * (optional) The account (DEPRECATED)
     */
    "account"?: string;
}
export interface Alias {
    "id": string;
    "encryptionPrivatekey"?: string;
    "encryptionPublickey"?: string;
    "publicvalue"?: string;
    "txid"?: string;
    "address"?: string;
    "time"?: number;
    "acceptcerttransfers"?: boolean;
    "expiresOn"?: number;
    "expired"?: boolean;
}
export interface AliasHistoryIndex {
    "id": string;
    "encryptionPrivatekey"?: string;
    "encryptionPublickey"?: string;
    "publicvalue"?: string;
    "alias"?: string;
    "time"?: number;
    "address"?: string;
    "acceptcerttransfers"?: boolean;
    "op"?: string;
}
export interface AliasIndex {
    "id": string;
    "address"?: string;
}
export interface AliasNewRequest {
    /**
     * Alias name
     */
    "aliasname": string;
    /**
     * Alias public profile data, 512 characters max.
     */
    "publicvalue"?: string;
    /**
     * set to No if this alias should not allow a certificate to be transferred to it. Defaults to Yes.
     */
    "accepttransfers"?: string;
    /**
     * Time in seconds. Future time when to expire alias. It is exponentially more expensive per year, calculation is FEERATE*(2.88^years). FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 year.
     */
    "expireTimestamp"?: string;
    /**
     * Address for this alias.
     */
    "address"?: string;
    /**
     * Encrypted private key used for encryption/decryption of private data related to this alias. Should be encrypted to publickey.
     */
    "encryptionPrivatekey"?: string;
    /**
     * Public key used for encryption/decryption of private data related to this alias.
     */
    "encryptionPublickey"?: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface AliasPayRequest {
    /**
     * Alias you own to pay from
     */
    "alias": string;
    /**
     * Currency to pay from
     */
    "currency": string;
    /**
     * A json object with aliases and amounts { \"address\":amount   (numeric or string) The syscoin alias is the key, the numeric amount (can be string) in SYS is the value ,... }
     */
    "amounts": string;
    /**
     * Only use the balance confirmed at least this many times.
     */
    "minconf"?: number;
    /**
     * A comment
     */
    "comment"?: string;
}
export interface AliasTxHistoryIndex {
    "id": string;
    "alias"?: string;
    "type"?: string;
    "guid"?: string;
    "value"?: string;
    "time"?: number;
}
export interface AliasUpdateRequest {
    /**
     * Alias name
     */
    "aliasname": string;
    /**
     * Alias public profile data, 512 characters max.
     */
    "publicvalue"?: string;
    /**
     * Address of alias.
     */
    "address"?: string;
    /**
     * set to false if this alias should not allow a certificate to be transferred to it. Defaults to true.
     */
    "accepttransfers"?: string;
    /**
     * Time in seconds. Future time when to expire alias. It is exponentially more expensive per year, calculation is 2.88^years. FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 year.
     */
    "expireTimestamp"?: string;
    /**
     * Encrypted private key used for encryption/decryption of private data related to this alias. If transferring, the key should be encrypted to alias_pubkey.
     */
    "encryptionPrivatekey"?: string;
    /**
     * Public key used for encryption/decryption of private data related to this alias. Useful if you are changing pub/priv keypair for encryption on this alias.
     */
    "encryptionPublickey"?: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface AliasUpdateWhitelistRequest {
    /**
     * owner alias controlling this whitelist.
     */
    "owneralias": string;
    /**
     *  \"entries\"       (string) A json array of whitelist entries to add/remove/update [ \"alias\"     (string) Alias that you want to add to the affiliate whitelist. Can be * to represent that the offers owned by owner alias can be resold by anybody \"discount_percentage\"     (number) A discount percentage associated with this alias. The reseller can sell your offer at this discount, not accounting for any commissions he/she may set in his own reselling offer. 0 to 99. ,... ]
     */
    "entries": Array<WhitelistEntry>;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface ByteMessageInfo {
    "addr": number;
    "block"?: number;
    "getaddr"?: number;
    "getdata"?: number;
    "getheaders": number;
    "headers": number;
    "inv": number;
    "ping": number;
    "pong": number;
    "sendheaders": number;
    "tx"?: number;
    "verack": number;
    "version": number;
}
export interface Cert {
    "id"?: string;
    "txid"?: string;
    "height"?: number;
    "title"?: string;
    "time"?: number;
    "publicvalue"?: string;
    "category"?: string;
    "alias"?: string;
    "accessFlags"?: number;
    "expiresOn"?: number;
    "expired"?: boolean;
}
export interface CertHistoryIndex {
    "id"?: string;
    "cert"?: string;
    "height"?: number;
    "time"?: number;
    "title"?: string;
    "publicvalue"?: string;
    "category"?: string;
    "alias"?: string;
    "accessFlags"?: number;
    "op"?: string;
}
export interface CertIndex {
    "id"?: string;
    "title"?: string;
    "height"?: number;
    "category"?: string;
    "alias"?: string;
}
export interface CertNewRequest {
    /**
     * An alias you own.
     */
    "alias": string;
    /**
     * title, 256 characters max.
     */
    "title": string;
    /**
     * public data, 512 characters max.
     */
    "public": string;
    /**
     * category, 256 characters max. Defaults to certificates;
     */
    "category"?: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface CertTransferRequest {
    /**
     * Certificate guidkey.
     */
    "certkey": string;
    /**
     * Alias to transfer this certificate to.
     */
    "alias": string;
    /**
     * Public certificate data, 512 characters max.
     */
    "public"?: string;
    /**
     * Set new access flags for new owner for this certificate, 0 for read-only, 1 for edit, 2 for edit and transfer access.
     */
    "accessflags"?: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface CertUpdateRequest {
    /**
     * Certificate guidkey.
     */
    "guid": string;
    /**
     * Certificate title, 256 characters max.
     */
    "title"?: string;
    /**
     * Public certificate data, 512 characters max.
     */
    "public"?: string;
    /**
     * Category, 256 characters max. Defaults to certificates.
     */
    "category"?: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface DataStoreLocation {
    /**
     * URL from which the data can be fetched
     */
    "dataUrl": string;
}
export interface EncryptWalletRequest {
    /**
     * The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long.
     */
    "passphrase": string;
}
export interface ErrorResponse {
    "message": string;
}
export interface Escrow {
    "id"?: string;
    "time"?: number;
    "seller"?: string;
    "arbiter"?: string;
    "buyer"?: string;
    "witness"?: string;
    "offer"?: string;
    "offerPrice"?: string;
    "reseller"?: string;
    "quantity"?: number;
    "totalWithFee"?: number;
    "totalWithoutFee"?: number;
    "bidInOfferCurrencyPerUnit"?: number;
    "totalOrBidInPaymentOptionPerUnit"?: number;
    "buynow"?: boolean;
    "commission"?: number;
    "arbiterfee"?: number;
    "networkfee"?: number;
    "witnessfee"?: number;
    "shipping"?: number;
    "deposit"?: number;
    "currency"?: string;
    "exttxid"?: string;
    "escrowaddress"?: string;
    "paymentoption"?: string;
    "redeemTxid"?: string;
    "redeemScript"?: string;
    "txid"?: string;
    "height"?: number;
    "role"?: string;
    "expired"?: boolean;
    "status"?: string;
}
export interface EscrowBidIndex {
    "id"?: string;
    "offer"?: string;
    "escrow"?: string;
    "height"?: number;
    "bidder"?: string;
    "bidInOfferCurrencyPerUnit"?: string;
    "bidInPaymentOptionPerUnit"?: string;
    "witness"?: string;
    "status"?: string;
}
export interface EscrowBidRequest {
    /**
     * An alias you own.
     */
    "alias": string;
    /**
     * Escrow GUID to place bid on.
     */
    "escrow": string;
    /**
     * Amount to bid on offer through escrow. Bid is in payment option currency. Example, If offer is paid in SYS and you have deposited 10 SYS in escrow and would like to increase your total bid to 14 SYS enter 14 here. It is per unit of purchase.
     */
    "bidInPaymentOption": string;
    /**
     * Converted value of bid_in_payment_option from paymentOption currency to offer currency. For example, offer is priced in USD and purchased in BTC, this field will be the BTC/USD value. It is per unit of purchase.
     */
    "bidInOfferCurrency": string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface EscrowCompleteRefundRequest {
    "escrowguid": string;
    "rawtx": string;
    "witness"?: string;
}
export interface EscrowCompleteReleaseRequest {
    "escrowguid": string;
    "rawtx": string;
    "witness"?: string;
}
export interface EscrowCreateRawTransactionRequest {
    "type": string;
    "escrowguid": string;
    "inputs": Array<GetAddressUTXOsEntry>;
    "role"?: string;
}
export interface EscrowFeedbackIndex {
    "id"?: string;
    "offer"?: string;
    "escrow"?: string;
    "txid"?: string;
    "time"?: number;
    "rating"?: number;
    "feedbackuserfrom"?: string;
    "feedbackuserto"?: string;
    "feedback"?: string;
}
export interface EscrowFeedbackRequest {
    "escrowguid": string;
    "userfrom": string;
    "feedback": string;
    "rating": string;
    "userto": string;
    "witness"?: string;
}
export interface EscrowIndex {
    "id"?: string;
    "offer"?: string;
    "escrow"?: string;
    "height"?: number;
    "seller"?: string;
    "arbiter"?: string;
    "buyer"?: string;
}
export interface EscrowNewRequest {
    /**
     * True or False. Get deposit and total escrow amount aswell as escrow address for funding. If buynow is false pass bid amount in bid_in_payment_option to get total needed to complete escrow. If buynow is true amount is calculated based on offer price and quantity.
     */
    "getamountandaddress": string;
    /**
     * An alias you own.
     */
    "alias": string;
    /**
     * Alias of arbiter.
     */
    "arbiter": string;
    /**
     * GUID of offer that this escrow is managing.
     */
    "offer": string;
    /**
     * Quantity of items to buy of offer.
     */
    "quantity": string;
    /**
     * Specify whether the escrow involves purchasing offer for the full offer price if set to true, or through a bidding auction if set to false. If buynow is false, an initial deposit may be used to secure a bid if required by the seller.
     */
    "buynow": string;
    /**
     * Total amount of the offer price. Amount is in paymentOption currency. It is per unit of purchase.
     */
    "totalInPaymentOption": string;
    /**
     * Amount to add to shipping for merchant. Amount is in paymentOption currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here. Default is 0. Buyer can also add shipping using escrowaddshipping upon merchant request.
     */
    "shipping"?: string;
    /**
     * Network fee in satoshi per byte for the transaction. Generally the escrow transaction is about 400 bytes. Default is 25 for SYS or ZEC and 250 for BTC payments.
     */
    "networkfee"?: string;
    /**
     * Arbiter fee in fractional amount of the amount_in_payment_option value. For example 0.75% is 0.0075 and represents 0.0075*amount_in_payment_option satoshis paid to arbiter in the event arbiter is used to resolve a dispute. Default and minimum is 0.005.
     */
    "arbiterfee"?: string;
    /**
     * Witness fee in fractional amount of the amount_in_payment_option value. For example 0.3% is 0.003 and represents 0.003*amount_in_payment_option satoshis paid to witness in the event witness signs off on an escrow through any of the following calls escrownew/escrowbid/escrowrelease/escrowrefund. Default is 0.
     */
    "witnessfee"?: string;
    /**
     * External transaction ID if paid with another blockchain.
     */
    "exttx"?: string;
    /**
     * If extTx is defined, specify a valid payment option used to make payment. Default is SYS.
     */
    "paymentoption"?: string;
    /**
     * Initial bid amount you are willing to pay escrow for this offer. Amount is in paymentOption currency. It is per unit of purchase. If buynow is set to true, this value is disregarded.
     */
    "bidInPaymentOption"?: string;
    /**
     * Converted value of bid_in_payment_option from paymentOption currency to offer currency. For example, offer is priced in USD and purchased in BTC, this field will be the BTC/USD value. If buynow is set to true, this value is disregarded.
     */
    "bidInOfferCurrency"?: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface EscrowRefundRequest {
    "escrowguid": string;
    "userrole": string;
    "rawtx": string;
    "witness"?: string;
}
export interface EscrowReleaseRequest {
    "escrowguid": string;
    "userrole": string;
    "rawtx": string;
    "witness"?: string;
}
export interface GetAddressUTXOsEntry {
    "address"?: string;
    "txid"?: string;
    "outputIndex"?: number;
    "script"?: string;
    "satoshis"?: number;
    "height"?: number;
}
export interface GetBlockResponse {
    /**
     * The block hash (same as provided)
     */
    "hash"?: string;
    /**
     * The number of confirmations, or -1 if the block is not on the main chain
     */
    "confirmations"?: number;
    /**
     * The block size
     */
    "size"?: number;
    /**
     * The block size excluding witness data
     */
    "strippedsize"?: number;
    /**
     * The block weight (BIP 141)
     */
    "weight"?: number;
    /**
     * The block height or index
     */
    "height"?: number;
    /**
     * The block version
     */
    "version"?: number;
    /**
     * The block version formatted in hexadecimal
     */
    "versionHex"?: string;
    /**
     * The merkle root
     */
    "merkleroot"?: string;
    /**
     * The transaction ids
     */
    "tx"?: Array<string>;
    /**
     * The block time in seconds since epoch (Jan 1 1970 GMT)
     */
    "time"?: number;
    /**
     * The median block time in seconds since epoch (Jan 1 1970 GMT)
     */
    "mediantime"?: number;
    /**
     * The nonce
     */
    "nonce"?: number;
    /**
     * The bits
     */
    "bits"?: string;
    /**
     * The difficulty
     */
    "difficulty"?: number;
    /**
     * Expected number of hashes required to produce the chain up to this block (in hex)
     */
    "chainwork"?: string;
    /**
     * The hash of the previous block
     */
    "previousblockhash"?: string;
    /**
     * The hash of the next block
     */
    "nextblockhash"?: string;
    /**
     * (for verbose=false) A string that is serialized, hex-encoded data for block 'hash'.
     */
    "data"?: string;
}
export interface GetBlockchainInfoResponse {
    /**
     * Current network name as defined in BIP70 (main, test, regtest)
     */
    "chain"?: string;
    /**
     * the current number of blocks processed in the server
     */
    "blocks"?: number;
    /**
     * the current number of headers we have validated
     */
    "headers"?: number;
    /**
     * the hash of the currently best block
     */
    "bestblockhash"?: string;
    /**
     * the current difficulty
     */
    "difficulty"?: number;
    /**
     * median time for the current best block
     */
    "mediantime"?: number;
    /**
     * estimate of verification progress [0..1]
     */
    "verificationprogress"?: number;
    /**
     * total amount of work in active chain, in hexadecimal
     */
    "chainwork"?: string;
    /**
     * if the blocks are subject to pruning
     */
    "pruned"?: boolean;
    /**
     * lowest-height complete block stored
     */
    "pruneheight"?: number;
    /**
     * status of softforks in progress
     */
    "softforks"?: Array<any>;
    /**
     * status of BIP9 softforks in progress
     */
    "bip9Softforks"?: any;
}
export interface GetNewAddressRequest {
    /**
     * DEPRECATED. The account name for the address to be linked to. If not provided, the default account \"\" is used. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.
     */
    "account"?: string;
}
export interface ImportAddressRequest {
    /**
     * The hex-encoded script (or address)
     */
    "script": string;
    /**
     * An optional label
     */
    "label"?: string;
    /**
     * Rescan the wallet for transactions
     */
    "rescan"?: boolean;
    /**
     * Add the P2SH version of the script as well
     */
    "p2sh"?: boolean;
}
export interface ImportPrivKeyRequest {
    /**
     * The private key (see dumpprivkey)
     */
    "syscoinprivkey": string;
    /**
     * An optional label
     */
    "label"?: string;
    /**
     * Rescan the wallet for transactions
     */
    "rescan"?: boolean;
}
export interface ImportPubKeyRequest {
    /**
     * The hex-encoded public key
     */
    "pubkey": string;
    /**
     * An optional label
     */
    "label"?: string;
    /**
     * Rescan the wallet for transactions
     */
    "rescan"?: boolean;
}
export interface ImportWalletRequest {
    /**
     * The wallet file
     */
    "filename": string;
}
export interface Info {
    /**
     * the server version
     */
    "version": number;
    /**
     * the dashpay server version
     */
    "dashversion": number;
    /**
     * the protocol version
     */
    "protocolversion": number;
    /**
     * the wallet version
     */
    "walletversion": number;
    /**
     * the total syscoin balance of the wallet
     */
    "balance": number;
    /**
     * the current number of blocks processed in the server
     */
    "blocks": number;
    /**
     * the time offset
     */
    "timeoffset": number;
    /**
     * the number of connections
     */
    "connections": number;
    /**
     * the proxy used by the server
     */
    "proxy": string;
    /**
     * the current difficulty
     */
    "difficulty": number;
    /**
     * if the server is using testnet or not
     */
    "testnet": boolean;
    /**
     * the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
     */
    "keypoololdest": number;
    /**
     * how many new keys are pre-generated
     */
    "keypoolsize": number;
    /**
     * the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
     */
    "unlockedUntil": number;
    /**
     * the transaction fee set in SYS/kB
     */
    "paytxfee": number;
    /**
     * minimum relay fee for non-free transactions in SYS/kB
     */
    "relayfee": number;
    /**
     * any error messages
     */
    "errors": string;
}
export interface ListSinceBlockResponse {
    "transactions"?: Array<SinceBlockTransactionEntry>;
    /**
     * The hash of the last block
     */
    "lastblock"?: string;
}
export interface LoginResponse {
    "success": boolean;
    "message": string;
    "token": string;
}
export interface MiningInfo {
    /**
     * The current block
     */
    "blocks": number;
    /**
     * The last block size
     */
    "currentblocksize": number;
    /**
     * The last block transaction
     */
    "currentblocktx": number;
    /**
     * The current difficulty
     */
    "difficulty": number;
    /**
     * Current errors
     */
    "errors": string;
    /**
     * The processor limit for generation. -1 if no generation.
     */
    "genproclimit": number;
    /**
     * Current network hashrate in kbs
     */
    "networkhashps"?: number;
    /**
     * The size of the mem pool
     */
    "pooledtx": number;
    /**
     * If using testnet or not
     */
    "testnet": boolean;
    /**
     * current network name as defined in BIP70 (main, test, regtest)
     */
    "chain": string;
    /**
     * If the generation is on or off (see getgenerate or setgenerate calls)
     */
    "generate": boolean;
}
export interface MoveRequest {
    /**
     * The name of the account to move funds from. May be the default account using \"\".
     */
    "fromaccount": string;
    /**
     * The name of the account to move funds to. May be the default account using \"\".
     */
    "toaccount": string;
    /**
     * Quantity of SYS to move between accounts.
     */
    "amount": number;
    /**
     * Only use funds with at least this many confirmations.
     */
    "minconf"?: string;
    /**
     * An optional comment, stored in the wallet only.
     */
    "comment"?: string;
}
export interface NetworkInfo {
    "version"?: number;
    "subversion"?: string;
    "protocolversion"?: number;
    "localservices"?: string;
    "localrelay"?: boolean;
    "timeoffset"?: number;
    "connections"?: number;
    "networks"?: Array<NetworkInfoDetails>;
    "relayfee"?: number;
    "localaddresses"?: Array<string>;
    "warnings"?: string;
}
export interface NetworkInfoDetails {
    "name"?: string;
    "limited"?: boolean;
    "reachable"?: boolean;
    "proxy"?: string;
    "proxyRandomizeCredentials"?: boolean;
}
export interface Offer {
    "id": string;
    "cert"?: string;
    "txid"?: string;
    "expiresOn"?: number;
    "expired"?: boolean;
    "height"?: number;
    "category"?: string;
    "title"?: string;
    "currency"?: string;
    "price"?: number;
    "commission"?: number;
    "offerlinkGuid"?: string;
    "offerlinkSeller"?: string;
    "paymentoptions"?: number;
    "offerUnits"?: number;
    "quantity"?: number;
    "offersSold"?: number;
    "private"?: boolean;
    "description"?: string;
    "alias"?: string;
    "address"?: string;
    "offertype"?: string;
    "auctionExpiresOn"?: number;
    "auctionReservePrice"?: number;
    "auctionRequireWitness"?: boolean;
    "auctionDeposit"?: number;
}
export interface OfferHistoryIndex {
    "id": string;
    "offer"?: string;
    "cert"?: string;
    "height"?: number;
    "category"?: string;
    "title"?: string;
    "currency"?: string;
    "price"?: number;
    "commission"?: number;
    "paymentoptions"?: number;
    "offerUnits"?: number;
    "quantity"?: number;
    "private"?: boolean;
    "description"?: string;
    "alias"?: string;
    "offertype"?: string;
    "auctionExpiresOn"?: number;
    "auctionReservePrice"?: number;
    "auctionRequireWitness"?: boolean;
    "auctionDeposit"?: number;
    "op"?: string;
}
export interface OfferIndex {
    "id": string;
    "cert"?: string;
    "height"?: number;
    "category"?: string;
    "title"?: string;
    "currency"?: string;
    "price"?: number;
    "paymentoptions"?: number;
    "offerUnits"?: number;
    "quantity"?: number;
    "private"?: boolean;
    "alias"?: string;
    "offertype"?: string;
    "auctionExpiresOn"?: number;
    "auctionReservePrice"?: number;
}
export interface OfferLinkRequest {
    /**
     * An alias you own.
     */
    "alias": string;
    /**
     * offer guid that you are linking to
     */
    "guid": string;
    /**
     * percentage of profit desired over original offer price, > 0, ie 5 for 5%
     */
    "commission": string;
    /**
     * description, 512 characters max. Defaults to original description.
     */
    "description"?: string;
}
export interface OfferNewRequest {
    /**
     * An alias you own.
     */
    "alias": string;
    /**
     * category, 256 characters max.
     */
    "category": string;
    /**
     * title, 256 characters max.
     */
    "title": string;
    /**
     * quantity, > 0 or -1 for infinite
     */
    "quantity": string;
    /**
     * price in <currency>, > 0
     */
    "price": string;
    /**
     * description, 512 characters max.
     */
    "description": string;
    /**
     * The currency code that you want your offer to be in ie USD.
     */
    "currency": string;
    /**
     * Set this to the guid of a certificate you wish to sell
     */
    "certguid"?: string;
    /**
     * 'SYS' to accept SYS only, 'BTC' for BTC only, 'ZEC' for zcash only, or a |-delimited string to accept multiple currencies (e.g. 'BTC|SYS' to accept BTC or SYS). Leave empty for default. Defaults to 'SYS'.
     */
    "paymentoptions"?: string;
    /**
     * set to true if this offer should be private not be searchable. Defaults to false.
     */
    "private"?: string;
    /**
     * Units that 1 qty represents. For example if selling 1 BTC.
     */
    "units"?: string;
    /**
     * Options of how an offer is sold. 'BUYNOW' for regular Buy It Now offer, 'AUCTION' to auction this offer while providing auction_expires/auction_reserve/auction_require_witness parameters, 'COIN' for offers selling cryptocurrency, or a | -delimited string to create an offer with multiple options(e.g. 'BUYNOW|AUCTION' to create an offer that is sold through an auction but has Buy It Now enabled as well).Leave empty for default. Defaults to 'BUYNOW'.
     */
    "offertype"?: string;
    /**
     * If offerType is AUCTION, Datetime of expiration of an auction. Once merchant creates an offer as an auction, the expiry must be non-zero. The auction parameters will not be updateable until an auction expires.
     */
    "auctionExpires"?: string;
    /**
     * If offerType is AUCTION, Reserve price of an offer publicly. Bids must be of higher price than the reserve price. Any bid below the reserve price will be rejected by consensus checks in escrow. Default is 0.
     */
    "auctionReserve"?: string;
    /**
     * If offerType is AUCTION, Require a witness signature for bids of an offer, or release/refund of an escrow funds in an auction for the offer. Set to true if you wish to require witness signature. Default is false.
     */
    "auctionRequireWitness"?: string;
    /**
     * If offerType is AUCTION. If you require a deposit for each bidder to ensure stake to bidders set this to a percentage of the offer price required to place deposit when doing an initial bid. For Example, 1% of the offer price would be 0.01. Default is 0.
     */
    "auctionDeposit"?: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface OfferUpdateRequest {
    /**
     * An alias you own.
     */
    "alias": string;
    /**
     * GUID of offer to update.
     */
    "guid": string;
    /**
     * category, 256 characters max.
     */
    "category"?: string;
    /**
     * title, 256 characters max.
     */
    "title"?: string;
    /**
     * quantity, > 0 or -1 for infinite
     */
    "quantity"?: string;
    /**
     * price in <currency>, > 0
     */
    "price"?: string;
    /**
     * description, 512 characters max.
     */
    "description"?: string;
    /**
     * The currency code that you want your offer to be in ie USD.
     */
    "currency"?: string;
    /**
     * set to true if this offer should be private not be searchable. Defaults to false.
     */
    "private"?: string;
    /**
     * Set this to the guid of a certificate you wish to sell
     */
    "certguid"?: string;
    /**
     * For resold offers.
     */
    "commission"?: string;
    /**
     * 'SYS' to accept SYS only, 'BTC' for BTC only, 'ZEC' for zcash only, or a |-delimited string to accept multiple currencies (e.g. 'BTC|SYS' to accept BTC or SYS). Leave empty for default. Defaults to 'SYS'.
     */
    "paymentoptions"?: string;
    /**
     * Options of how an offer is sold. 'BUYNOW' for regular Buy It Now offer, 'AUCTION' to auction this offer while providing auction_expires/auction_reserve/auction_require_witness parameters, 'COIN' for offers selling cryptocurrency, or a | -delimited string to create an offer with multiple options(e.g. 'BUYNOW|AUCTION' to create an offer that is sold through an auction but has Buy It Now enabled as well).Leave empty for default. Defaults to 'BUYNOW'.
     */
    "offertype"?: string;
    /**
     * If offerType is AUCTION, Datetime of expiration of an auction. Once merchant creates an offer as an auction, the expiry must be non-zero. The auction parameters will not be updateable until an auction expires.
     */
    "auctionExpires"?: string;
    /**
     * If offerType is AUCTION, Reserve price of an offer publicly. Bids must be of higher price than the reserve price. Any bid below the reserve price will be rejected by consensus checks in escrow. Default is 0.
     */
    "auctionReserve"?: string;
    /**
     * If offerType is AUCTION, Require a witness signature for bids of an offer, or release/refund of an escrow funds in an auction for the offer. Set to true if you wish to require witness signature. Default is false.
     */
    "auctionRequireWitness"?: string;
    /**
     * If offerType is AUCTION. If you require a deposit for each bidder to ensure stake to bidders set this to a percentage of the offer price required to place deposit when doing an initial bid. For Example, 1% of the offer price would be 0.01. Default is 0.
     */
    "auctionDeposit"?: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    "witness"?: string;
}
export interface PeerInfo {
    /**
     * Peer index
     */
    "id": number;
    /**
     * The ip address and port of the peer
     */
    "addr": string;
    /**
     * local address
     */
    "addrlocal": string;
    /**
     * The services offered
     */
    "services": string;
    /**
     * Whether peer has asked us to relay transactions to it
     */
    "relaytxes": boolean;
    /**
     * The time in seconds since epoch (Jan 1 1970 GMT) of the last send
     */
    "lastsend": number;
    /**
     * The time in seconds since epoch (Jan 1 1970 GMT) of the last receive
     */
    "lastrecv": number;
    /**
     * The total bytes sent
     */
    "bytessent": number;
    /**
     * The total bytes received
     */
    "bytesrecv": number;
    /**
     * The connection time in seconds since epoch (Jan 1 1970 GMT)
     */
    "conntime": number;
    /**
     * The time offset in seconds
     */
    "timeoffset": number;
    /**
     * ping time
     */
    "pingtime": number;
    /**
     * minimum observed ping time
     */
    "minping": number;
    /**
     * The peer version, such as 7001
     */
    "version": number;
    /**
     * The string version
     */
    "subver": string;
    /**
     * Inbound (true) or Outbound (false)
     */
    "inbound": boolean;
    /**
     * The starting height (block) of the peer
     */
    "startingheight": number;
    /**
     * The ban score
     */
    "banscore": number;
    /**
     * The last header we have in common with this peer
     */
    "syncedHeaders": number;
    /**
     * The last block we have in common with this peer
     */
    "syncedBlocks": number;
    /**
     * The heights of blocks we're currently asking from this peer
     */
    "inflight": Array<number>;
    /**
     * If this peer is whitelisted
     */
    "whitelisted": boolean;
    "bytessentPerMsg": ByteMessageInfo;
    "bytesrecvPerMsg": ByteMessageInfo;
}
export interface PeerInfoResponse extends Array<PeerInfo> {
}
export interface SendFromRequest {
    /**
     * The name of the account to send funds from. May be the default account using \"\".
     */
    "fromaccount": string;
    /**
     * The syscoin address to send funds to.
     */
    "tosyscoinaddress": string;
    /**
     * he amount in SYS (transaction fee is added on top).
     */
    "amount": number;
    /**
     * Only use funds with at least this many confirmations.
     */
    "minconf"?: number;
    /**
     * Whether to add 5 confirmations to transactions locked via InstantSend
     */
    "addlockconf"?: boolean;
    /**
     * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
     */
    "comment"?: string;
    /**
     * An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet.
     */
    "commentto"?: string;
}
export interface SendManyRequest {
    /**
     * DEPRECATED. The account to send the funds from. Should be \"\" for the default account
     */
    "fromaccount": string;
    /**
     * A json object with addresses and amounts { \"address\":amount   (numeric) The syscoin address is the key, the numeric amount in SYS is the value,...}
     */
    "amounts": string;
    /**
     * Only use the balance confirmed at least this many times.
     */
    "minconf"?: number;
    /**
     * Whether to add 5 confirmations to transactions locked via InstantSend
     */
    "addlockconf"?: boolean;
    /**
     * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
     */
    "comment"?: string;
    /**
     * A json array with addresses. The fee will be equally deducted from the amount of each selected address. Those recipients will receive less syscoins than you enter in their corresponding amount field. If no addresses are specified here, the sender pays the fee. [ \"address\" Subtract fee from this address,... ]
     */
    "subtractfeefromamount"?: string;
    /**
     * Send this transaction as InstantSend (default, false).
     */
    "useIs"?: string;
    /**
     * Use anonymized funds only (default, false).
     */
    "usePs"?: string;
}
export interface SendRawTransactionRequest {
    "hexstring": string;
    "allowhighfees"?: boolean;
    "instantsend"?: boolean;
}
export interface SendToAddressRequest {
    /**
     * The syscoin address to send to.
     */
    "syscoinaddress": string;
    /**
     * The amount in SYS to send. eg 0.1
     */
    "amount": number;
    /**
     * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
     */
    "comment"?: string;
    /**
     * An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet.
     */
    "commentto"?: string;
    /**
     * The fee will be deducted from the amount being sent. The recipient will receive less syscoins than you enter in the amount field.
     */
    "subtractfeefromamount"?: string;
    /**
     * Send this transaction as InstantSend (default, false).
     */
    "useIs"?: string;
    /**
     * Use anonymized funds only (default, false).
     */
    "usePs"?: string;
}
export interface SignMessageRequest {
    /**
     * The syscoin address to use for the private key.
     */
    "syscoinaddress": string;
    /**
     * The message to create a signature of.
     */
    "message": string;
}
export interface SinceBlockTransactionEntry {
    /**
     * DEPRECATED. The account name associated with the transaction. Will be \"\" for the default account.
     */
    "account"?: string;
    /**
     * The syscoin address of the transaction. Not present for move transactions (category = move).
     */
    "address"?: string;
    /**
     * The transaction category. 'send' has negative amounts, 'receive' has positive amounts.
     */
    "category"?: string;
    /**
     * The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds.
     */
    "amount"?: number;
    /**
     * the vout value
     */
    "vout"?: number;
    /**
     * The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions.
     */
    "fee"?: number;
    /**
     * Current transaction lock state. Available for 'send' and 'receive' category of transactions.
     */
    "instantlock"?: boolean;
    /**
     * The number of confirmations for the transaction. Available for 'send' and 'receive' category of transactions.
     */
    "confirmations"?: number;
    /**
     * The block hash containing the transaction. Available for 'send' and 'receive' category of transactions.
     */
    "blockhash"?: string;
    /**
     * The block index containing the transaction. Available for 'send' and 'receive' category of transactions.
     */
    "blockindex"?: number;
    /**
     * The block time in seconds since epoch (1 Jan 1970 GMT).
     */
    "blocktime"?: number;
    /**
     * The transaction id. Available for 'send' and 'receive' category of transactions.
     */
    "txid"?: string;
    /**
     * The transaction time in seconds since epoch (Jan 1 1970 GMT).
     */
    "time"?: number;
    /**
     * The time received in seconds since epoch (Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions.
     */
    "timereceived"?: number;
    /**
     * If a comment is associated with the transaction.
     */
    "comment"?: string;
    /**
     * A comment for the address/transaction, if any
     */
    "label"?: string;
    /**
     * If a comment to is associated with the transaction.
     */
    "to"?: string;
}
export interface StoreDataRequest {
    /**
     * The data to be stored on the decentralized storage facility. Max size 500kb.
     */
    "data": string;
    /**
     * Array of data warehousing facilities to use to store the data, valid values: BFAZURE
     */
    "storeLocations"?: Array<string>;
}
export interface StoreDataResponse {
    /**
     * Array of objects which describe where data is stored offchain
     */
    "storeLocations": Array<DataStoreLocation>;
}
export interface Transaction {
    /**
     * The transaction amount in SYS
     */
    "amount"?: string;
    /**
     * Current transaction lock state
     */
    "instantlock"?: boolean;
    /**
     * The number of confirmations
     */
    "confirmations"?: number;
    /**
     * The block hash
     */
    "blockhash"?: string;
    /**
     * The block index
     */
    "blockindex"?: number;
    /**
     * The time in seconds since epoch (1 Jan 1970 GMT)
     */
    "blocktime"?: number;
    /**
     * The transaction id.
     */
    "txid"?: string;
    /**
     * The transaction time in seconds since epoch (1 Jan 1970 GMT)
     */
    "time"?: number;
    /**
     * The time received in seconds since epoch (1 Jan 1970 GMT)
     */
    "timereceived"?: number;
    /**
     * Whether this transaction could be replaced due to BIP125 (replace-by-fee)
     */
    "bip125-replaceable"?: string;
    "details"?: Array<TransactionDetailEntry>;
    /**
     * Raw data for transaction
     */
    "hex"?: string;
}
export interface TransactionDetailEntry {
    /**
     * DEPRECATED. The account name involved in the transaction, can be \"\" for the default account.
     */
    "account"?: string;
    /**
     * The syscoin address involved in the transaction
     */
    "address"?: string;
    /**
     * The category, either 'send' or 'receive'
     */
    "category"?: string;
    /**
     * The amount in SYS
     */
    "amount"?: number;
    /**
     * A comment for the address/transaction, if any
     */
    "label"?: string;
    /**
     * the vout value
     */
    "vout"?: number;
}
export interface TransactionListEntry {
    /**
     * DEPRECATED. The account name associated with the transaction. It will be \"\" for the default account.
     */
    "account"?: string;
    /**
     * The syscoin address of the transaction. Not present for move transactions (category = move).
     */
    "address"?: string;
    /**
     * The transaction category. 'move' is a local (off blockchain) transaction between accounts, and not associated with an address, transaction id or block. 'send' and 'receive' transactions are associated with an address, transaction id and block details
     */
    "category"?: string;
    /**
     * The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds.
     */
    "amount"?: number;
    /**
     * the vout value
     */
    "vout"?: number;
    /**
     * The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions.
     */
    "fee"?: number;
    /**
     * Current transaction lock state. Available for 'send' and 'receive' category of transactions.
     */
    "instantlock"?: boolean;
    /**
     * The number of confirmations for the transaction. Available for 'send' and'receive' category of transactions. Negative confirmations indicate the transation conflicts with the block chain
     */
    "confirmations"?: number;
    /**
     * Whether we consider the outputs of this unconfirmed transaction safe to spend.
     */
    "trusted"?: boolean;
    /**
     * The block hash containing the transaction. Available for 'send' and 'receive' category of transactions.
     */
    "blockhash"?: string;
    /**
     * The block index containing the transaction. Available for 'send' and 'receive' category of transactions.
     */
    "blockindex"?: string;
    /**
     * The block time in seconds since epoch (1 Jan 1970 GMT).
     */
    "blocktime"?: number;
    /**
     * The transaction id. Available for 'send' and 'receive' category of transactions.
     */
    "txid"?: string;
    /**
     * The transaction time in seconds since epoch (midnight Jan 1 1970 GMT).
     */
    "time"?: number;
    /**
     * The time received in seconds since epoch (midnight Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions.
     */
    "timereceived"?: number;
    /**
     * If a comment is associated with the transaction.
     */
    "comment"?: string;
    /**
     * A comment for the address/transaction, if any
     */
    "label"?: string;
    /**
     * For the 'move' category of transactions, the account the funds came from (for receiving funds, positive amounts), or went to (for sending funds, negative amounts).
     */
    "otheraccount"?: string;
    /**
     * Whether this transaction could be replaced due to BIP125 (replace-by-fee)
     */
    "bip125-replaceable"?: string;
}
export interface ValidateAddressResponse {
    /**
     * If the address is valid or not. If not, this is the only property returned.
     */
    "isvalid"?: boolean;
    /**
     * The syscoin address validated
     */
    "address"?: string;
    /**
     * The zcash t-addr associated with this syscoin address validated
     */
    "zaddress"?: string;
    /**
     * The bitcoin address associated with this syscoin address validated
     */
    "btcaddress"?: string;
    /**
     * The syscoin alias associated with this syscoin address validated
     */
    "alias"?: string;
    /**
     * If the address is yours or not
     */
    "ismine"?: boolean;
    /**
     * If the address is watchonly
     */
    "iswatchonly"?: boolean;
    /**
     * If the key is a script
     */
    "isscript"?: boolean;
    /**
     * The hex value of the raw public key
     */
    "pubkey"?: string;
    /**
     * If the address is compressed
     */
    "iscompressed"?: boolean;
    /**
     * DEPRECATED. The account associated with the address, \"\" is the default account
     */
    "account"?: string;
}
export interface WalletInfo {
    /**
     * the wallet version
     */
    "walletversion"?: number;
    /**
     * the total confirmed balance of the wallet in SYS
     */
    "balance"?: number;
    /**
     * the total unconfirmed balance of the wallet in SYS
     */
    "unconfirmedBalance"?: number;
    /**
     * the total immature balance of the wallet in SYS
     */
    "immatureBalance"?: number;
    /**
     * the total number of transactions in the wallet
     */
    "txcount"?: number;
    /**
     * the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
     */
    "keypoololdest"?: number;
    /**
     * how many new keys are pre-generated
     */
    "keypoolsize"?: number;
    /**
     * how many new keys are pre-generated for internal use (used for change outputs, only appears if the wallet is using this feature, otherwise external keys are used)
     */
    "keypoolsizeHdInternal"?: number;
    /**
     * the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
     */
    "unlockedUntil"?: number;
    /**
     * the transaction fee configuration, set in SYS/kB
     */
    "paytxfee"?: number;
    /**
     * the ID of the HD chain
     */
    "hdchainid"?: string;
}
export interface WalletPassphraseChangeRequest {
    /**
     * The current passphrase
     */
    "oldpassphrase": string;
    /**
     * The new passphrase
     */
    "newpassphrase": string;
}
export interface WalletPassphraseRequest {
    /**
     * The wallet passphrase
     */
    "passphrase": string;
    /**
     * The time to keep the decryption key in seconds.
     */
    "timeout": number;
}
export interface WhitelistEntry {
    "alias"?: string;
    "discountPercentage"?: number;
}
/**
 * AliasesApi - fetch parameter creator
 */
export declare const AliasesApiFetchParamCreator: {
    aliasaddscript(params: {
        redeemscript: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliasbalance(params: {
        alias: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliasclearwhitelist(params: {
        owneralias: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliasfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliashistory(params: {
        query: string;
        count?: number | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliasinfo(params: {
        aliasname: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliasnew(params: {
        request: AliasNewRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliaspay(params: {
        request: AliasPayRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliastxhistory(params: {
        query: string;
        count?: number | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliasupdate(params: {
        request: AliasUpdateRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliasupdatewhitelist(params: {
        request: AliasUpdateWhitelistRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    aliaswhitelist(params: {
        alias: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    prunesyscoinservices(configuration: Configuration, options?: any): FetchArgs;
    syscoinquery(params: {
        collection: string;
        query: string;
        options?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
};
/**
 * AliasesApi - functional programming interface
 */
export declare const AliasesApiFp: {
    aliasaddscript(params: {
        redeemscript: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<any>;
    aliasbalance(params: {
        alias: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<any>;
    aliasclearwhitelist(params: {
        owneralias: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<any>;
    aliasfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<AliasIndex[]>;
    aliashistory(params: {
        query: string;
        count?: number | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<AliasHistoryIndex[]>;
    aliasinfo(params: {
        aliasname: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<Alias>;
    aliasnew(params: {
        request: AliasNewRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    aliaspay(params: {
        request: AliasPayRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    aliastxhistory(params: {
        query: string;
        count?: number | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<AliasTxHistoryIndex[]>;
    aliasupdate(params: {
        request: AliasUpdateRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    aliasupdatewhitelist(params: {
        request: AliasUpdateWhitelistRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    aliaswhitelist(params: {
        alias: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<WhitelistEntry[]>;
    prunesyscoinservices(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<any>;
    syscoinquery(params: {
        collection: string;
        query: string;
        options?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
};
/**
 * AliasesApi - object-oriented interface
 */
export declare class AliasesApi extends BaseAPI {
    /**
     * Add redeemscript to local wallet for signing smart contract based alias transactions.
     * @param redeemscript
     */
    aliasaddscript(params: {
        redeemscript: string;
    }, options?: any): Promise<any>;
    /**
     * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
     * @param alias The syscoin alias to get balance for
     */
    aliasbalance(params: {
        alias: string;
    }, options?: any): Promise<any>;
    /**
     * Clear your whitelist(controls who can resell).
     * @param owneralias
     * @param witness
     */
    aliasclearwhitelist(params: {
        owneralias: string;
        witness?: string;
    }, options?: any): Promise<any>;
    /**
     * scan and filter aliases
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliasfilter(params: {
        query: string;
        count?: string;
        from?: string;
    }, options?: any): Promise<AliasIndex[]>;
    /**
     * List all stored values of an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliashistory(params: {
        query: string;
        count?: number;
        from?: string;
    }, options?: any): Promise<AliasHistoryIndex[]>;
    /**
     * Show values of an alias.
     * @param aliasname
     */
    aliasinfo(params: {
        aliasname: string;
    }, options?: any): Promise<Alias>;
    /**
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasnew(params: {
        request: AliasNewRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     */
    aliaspay(params: {
        request: AliasPayRequest;
    }, options?: any): Promise<string[]>;
    /**
     * List all stored transactions related to an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliastxhistory(params: {
        query: string;
        count?: number;
        from?: string;
    }, options?: any): Promise<AliasTxHistoryIndex[]>;
    /**
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasupdate(params: {
        request: AliasUpdateRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
     * @param request
     */
    aliasupdatewhitelist(params: {
        request: AliasUpdateWhitelistRequest;
    }, options?: any): Promise<string[]>;
    /**
     * List all affiliates for this alias.
     * @param alias
     * @param witness
     */
    aliaswhitelist(params: {
        alias: string;
        witness?: string;
    }, options?: any): Promise<WhitelistEntry[]>;
    /**
     * Clean expired Syscoin services from indexer and internal database.
     */
    prunesyscoinservices(options?: any): Promise<any>;
    /**
     * Query the indexer for information in a collection.
     * @param collection Collection name, either \\\&quot;alias\\\&quot;, \\\&quot;aliashistory\\\&quot;, \\\&quot;aliastxhistory\\\&quot;, \\\&quot;cert\\\&quot;,  \\\&quot;certhistory\\\&quot;, \\\&quot;offer\\\&quot;, \\\&quot;offerhistory\\\&quot;, \\\&quot;feedback\\\&quot;, \\\&quot;escrow\\\&quot;, \\\&quot;escrowbid\\\&quot;
     * @param query JSON query on the collection to retrieve a set of documents
     * @param options JSON option arguments into the query. Based on mongoc_collection_find_with_opts.
     */
    syscoinquery(params: {
        collection: string;
        query: string;
        options?: string;
    }, options?: any): Promise<string[]>;
}
/**
 * AliasesApi - factory interface
 */
export declare const AliasesApiFactory: (fetch?: FetchAPI | undefined, basePath?: string | undefined) => {
    aliasaddscript(params: {
        redeemscript: string;
    }, configuration: Configuration, options?: any): any;
    aliasbalance(params: {
        alias: string;
    }, configuration: Configuration, options?: any): any;
    aliasclearwhitelist(params: {
        owneralias: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    aliasfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    aliashistory(params: {
        query: string;
        count?: number | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    aliasinfo(params: {
        aliasname: string;
    }, configuration: Configuration, options?: any): any;
    aliasnew(params: {
        request: AliasNewRequest;
    }, configuration: Configuration, options?: any): any;
    aliaspay(params: {
        request: AliasPayRequest;
    }, configuration: Configuration, options?: any): any;
    aliastxhistory(params: {
        query: string;
        count?: number | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    aliasupdate(params: {
        request: AliasUpdateRequest;
    }, configuration: Configuration, options?: any): any;
    aliasupdatewhitelist(params: {
        request: AliasUpdateWhitelistRequest;
    }, configuration: Configuration, options?: any): any;
    aliaswhitelist(params: {
        alias: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    prunesyscoinservices(configuration: Configuration, options?: any): any;
    syscoinquery(params: {
        collection: string;
        query: string;
        options?: string | undefined;
    }, configuration: Configuration, options?: any): any;
};
/**
 * BlockmarketApi - fetch parameter creator
 */
export declare const BlockmarketApiFetchParamCreator: {
    login(params: {
        auth: string;
    }, options?: any): FetchArgs;
    storedata(params: {
        request: StoreDataRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
};
/**
 * BlockmarketApi - functional programming interface
 */
export declare const BlockmarketApiFp: {
    login(params: {
        auth: string;
    }, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<LoginResponse>;
    storedata(params: {
        request: StoreDataRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<StoreDataResponse>;
};
/**
 * BlockmarketApi - object-oriented interface
 */
export declare class BlockmarketApi extends BaseAPI {
    /**
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    login(params: {
        auth: string;
    }, options?: any): Promise<LoginResponse>;
    /**
     * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
     * @param request
     */
    storedata(params: {
        request: StoreDataRequest;
    }, options?: any): Promise<StoreDataResponse>;
}
/**
 * BlockmarketApi - factory interface
 */
export declare const BlockmarketApiFactory: (fetch?: FetchAPI | undefined, basePath?: string | undefined) => {
    login(params: {
        auth: string;
    }, options?: any): any;
    storedata(params: {
        request: StoreDataRequest;
    }, configuration: Configuration, options?: any): any;
};
/**
 * CertificatesApi - fetch parameter creator
 */
export declare const CertificatesApiFetchParamCreator: {
    certfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    certhistory(params: {
        query: string;
        count?: number | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    certinfo(params: {
        guid: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    certnew(params: {
        request: CertNewRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    certtransfer(params: {
        request: CertTransferRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    certupdate(params: {
        request: CertUpdateRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
};
/**
 * CertificatesApi - functional programming interface
 */
export declare const CertificatesApiFp: {
    certfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<CertIndex[]>;
    certhistory(params: {
        query: string;
        count?: number | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<CertHistoryIndex[]>;
    certinfo(params: {
        guid: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<Cert>;
    certnew(params: {
        request: CertNewRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    certtransfer(params: {
        request: CertTransferRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    certupdate(params: {
        request: CertUpdateRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
};
/**
 * CertificatesApi - object-oriented interface
 */
export declare class CertificatesApi extends BaseAPI {
    /**
     * scan and filter certs
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certfilter(params: {
        query: string;
        count?: string;
        from?: string;
    }, options?: any): Promise<CertIndex[]>;
    /**
     * List all stored values of an cert.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certhistory(params: {
        query: string;
        count?: number;
        from?: string;
    }, options?: any): Promise<CertHistoryIndex[]>;
    /**
     * Show stored values of a single certificate.
     * @param guid
     */
    certinfo(params: {
        guid: string;
    }, options?: any): Promise<Cert>;
    /**
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    certnew(params: {
        request: CertNewRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    certtransfer(params: {
        request: CertTransferRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    certupdate(params: {
        request: CertUpdateRequest;
    }, options?: any): Promise<string[]>;
}
/**
 * CertificatesApi - factory interface
 */
export declare const CertificatesApiFactory: (fetch?: FetchAPI | undefined, basePath?: string | undefined) => {
    certfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    certhistory(params: {
        query: string;
        count?: number | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    certinfo(params: {
        guid: string;
    }, configuration: Configuration, options?: any): any;
    certnew(params: {
        request: CertNewRequest;
    }, configuration: Configuration, options?: any): any;
    certtransfer(params: {
        request: CertTransferRequest;
    }, configuration: Configuration, options?: any): any;
    certupdate(params: {
        request: CertUpdateRequest;
    }, configuration: Configuration, options?: any): any;
};
/**
 * EscrowApi - fetch parameter creator
 */
export declare const EscrowApiFetchParamCreator: {
    escrowacknowledge(params: {
        escrowguid: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowaddshipping(params: {
        escrow: string;
        shipping: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowbid(params: {
        request: EscrowBidRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowbidhistory(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowcompleterefund(params: {
        request: EscrowCompleteRefundRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowcompleterelease(params: {
        request: EscrowCompleteReleaseRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowcreaterawtransaction(params: {
        request: EscrowCreateRawTransactionRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowfeedback(params: {
        request: EscrowFeedbackRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowfeedbackhistory(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowinfo(params: {
        escrow: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrownew(params: {
        request: EscrowNewRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowrefund(params: {
        request: EscrowRefundRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    escrowrelease(params: {
        request: EscrowReleaseRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
};
/**
 * EscrowApi - functional programming interface
 */
export declare const EscrowApiFp: {
    escrowacknowledge(params: {
        escrowguid: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    escrowaddshipping(params: {
        escrow: string;
        shipping: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    escrowbid(params: {
        request: EscrowBidRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    escrowbidhistory(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<EscrowBidIndex[]>;
    escrowcompleterefund(params: {
        request: EscrowCompleteRefundRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    escrowcompleterelease(params: {
        request: EscrowCompleteReleaseRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    escrowcreaterawtransaction(params: {
        request: EscrowCreateRawTransactionRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    escrowfeedback(params: {
        request: EscrowFeedbackRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    escrowfeedbackhistory(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<EscrowFeedbackIndex[]>;
    escrowfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<EscrowIndex[]>;
    escrowinfo(params: {
        escrow: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<Escrow>;
    escrownew(params: {
        request: EscrowNewRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    escrowrefund(params: {
        request: EscrowRefundRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    escrowrelease(params: {
        request: EscrowReleaseRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
};
/**
 * EscrowApi - object-oriented interface
 */
export declare class EscrowApi extends BaseAPI {
    /**
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid
     * @param witness
     */
    escrowacknowledge(params: {
        escrowguid: string;
        witness?: string;
    }, options?: any): Promise<string[]>;
    /**
     * Add shipping to an escrow.
     * @param escrow GUID of escrow
     * @param shipping Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
     * @param witness Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    escrowaddshipping(params: {
        escrow: string;
        shipping: string;
        witness?: string;
    }, options?: any): Promise<string[]>;
    /**
     * Bid on an auction.
     * @param request
     */
    escrowbid(params: {
        request: EscrowBidRequest;
    }, options?: any): Promise<string[]>;
    /**
     * scan and filter bids on escrow contracts
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowbidhistory(params: {
        query: string;
        count?: string;
        from?: string;
    }, options?: any): Promise<EscrowBidIndex[]>;
    /**
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request
     */
    escrowcompleterefund(params: {
        request: EscrowCompleteRefundRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request
     */
    escrowcompleterelease(params: {
        request: EscrowCompleteReleaseRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
     * @param request
     */
    escrowcreaterawtransaction(params: {
        request: EscrowCreateRawTransactionRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
     * @param request
     */
    escrowfeedback(params: {
        request: EscrowFeedbackRequest;
    }, options?: any): Promise<string[]>;
    /**
     * scan and filter feedbacks and ratings
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfeedbackhistory(params: {
        query: string;
        count?: string;
        from?: string;
    }, options?: any): Promise<EscrowFeedbackIndex[]>;
    /**
     * scan and filter escrows
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfilter(params: {
        query: string;
        count?: string;
        from?: string;
    }, options?: any): Promise<EscrowIndex[]>;
    /**
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    escrowinfo(params: {
        escrow: string;
    }, options?: any): Promise<Escrow>;
    /**
     * Create new arbitrated Syscoin escrow.
     * @param request
     */
    escrownew(params: {
        request: EscrowNewRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
     * @param request
     */
    escrowrefund(params: {
        request: EscrowRefundRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
     * @param request
     */
    escrowrelease(params: {
        request: EscrowReleaseRequest;
    }, options?: any): Promise<string[]>;
}
/**
 * EscrowApi - factory interface
 */
export declare const EscrowApiFactory: (fetch?: FetchAPI | undefined, basePath?: string | undefined) => {
    escrowacknowledge(params: {
        escrowguid: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    escrowaddshipping(params: {
        escrow: string;
        shipping: string;
        witness?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    escrowbid(params: {
        request: EscrowBidRequest;
    }, configuration: Configuration, options?: any): any;
    escrowbidhistory(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    escrowcompleterefund(params: {
        request: EscrowCompleteRefundRequest;
    }, configuration: Configuration, options?: any): any;
    escrowcompleterelease(params: {
        request: EscrowCompleteReleaseRequest;
    }, configuration: Configuration, options?: any): any;
    escrowcreaterawtransaction(params: {
        request: EscrowCreateRawTransactionRequest;
    }, configuration: Configuration, options?: any): any;
    escrowfeedback(params: {
        request: EscrowFeedbackRequest;
    }, configuration: Configuration, options?: any): any;
    escrowfeedbackhistory(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    escrowfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    escrowinfo(params: {
        escrow: string;
    }, configuration: Configuration, options?: any): any;
    escrownew(params: {
        request: EscrowNewRequest;
    }, configuration: Configuration, options?: any): any;
    escrowrefund(params: {
        request: EscrowRefundRequest;
    }, configuration: Configuration, options?: any): any;
    escrowrelease(params: {
        request: EscrowReleaseRequest;
    }, configuration: Configuration, options?: any): any;
};
/**
 * GeneralApi - fetch parameter creator
 */
export declare const GeneralApiFetchParamCreator: {
    addmultisigaddress(params: {
        request: AddMultisigAddressRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    dumpprivkey(params: {
        address: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    dumpwallet(params: {
        filename: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    encryptwallet(params: {
        request: EncryptWalletRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    getaccount(params: {
        syscoinaddress: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    getaccountaddress(params: {
        account: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    getaddressbalance(params: {
        addresses: string[];
    }, configuration: Configuration, options?: any): FetchArgs;
    getaddressutxos(params: {
        addresses: string[];
    }, configuration: Configuration, options?: any): FetchArgs;
    getbalance(params: {
        account?: string | undefined;
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    getblock(params: {
        hash: string;
        verbose?: boolean | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    getblockchaininfo(configuration: Configuration, options?: any): FetchArgs;
    getblockcount(configuration: Configuration, options?: any): FetchArgs;
    getinfo(configuration: Configuration, options?: any): FetchArgs;
    getmininginfo(configuration: Configuration, options?: any): FetchArgs;
    getnetworkinfo(configuration: Configuration, options?: any): FetchArgs;
    getnewaddress(params: {
        request?: GetNewAddressRequest | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    getpeerinfo(configuration: Configuration, options?: any): FetchArgs;
    getreceivedbyaccount(params: {
        account: string;
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    getreceivedbyaddress(params: {
        syscoinaddress: string;
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    gettransaction(params: {
        txid: string;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    getunconfirmedbalance(configuration: Configuration, options?: any): FetchArgs;
    getwalletbalance(configuration: Configuration, options?: any): FetchArgs;
    getwalletinfo(configuration: Configuration, options?: any): FetchArgs;
    importaddress(params: {
        request: ImportAddressRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    importprivkey(params: {
        request: ImportPrivKeyRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    importpubkey(params: {
        request: ImportPubKeyRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    importwallet(params: {
        request: ImportWalletRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    listaccounts(params: {
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    listaddressgroupings(configuration: Configuration, options?: any): FetchArgs;
    listreceivedbyaccount(params: {
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeempty?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    listreceivedbyaddress(params: {
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeempty?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    listsinceblock(params: {
        blockhash?: string | undefined;
        includeWatchonly?: boolean | undefined;
        targetConfirmations?: number | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    listtransactions(params: {
        account?: string | undefined;
        count?: number | undefined;
        from?: number | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    sendfrom(params: {
        request: SendFromRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    sendmany(params: {
        request: SendManyRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    sendtoaddress(params: {
        request: SendToAddressRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    signmessage(params: {
        request: SignMessageRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    syscoindecoderawtransaction(params: {
        hexstring: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    syscoinsendrawtransaction(params: {
        hexstring: SendRawTransactionRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    validateaddress(params: {
        syscoinaddress: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    verifymessage(params: {
        syscoinaddress: string;
        signature: string;
        message: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    walletlock(configuration: Configuration, options?: any): FetchArgs;
    walletpassphrase(params: {
        request: WalletPassphraseRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    walletpassphrasechange(params: {
        request: WalletPassphraseChangeRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
};
/**
 * GeneralApi - functional programming interface
 */
export declare const GeneralApiFp: {
    addmultisigaddress(params: {
        request: AddMultisigAddressRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    dumpprivkey(params: {
        address: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    dumpwallet(params: {
        filename: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    encryptwallet(params: {
        request: EncryptWalletRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    getaccount(params: {
        syscoinaddress: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    getaccountaddress(params: {
        account: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    getaddressbalance(params: {
        addresses: string[];
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<any>;
    getaddressutxos(params: {
        addresses: string[];
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<GetAddressUTXOsEntry[]>;
    getbalance(params: {
        account?: string | undefined;
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<number>;
    getblock(params: {
        hash: string;
        verbose?: boolean | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<GetBlockResponse>;
    getblockchaininfo(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<GetBlockchainInfoResponse>;
    getblockcount(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<number>;
    getinfo(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<Info>;
    getmininginfo(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<MiningInfo>;
    getnetworkinfo(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<NetworkInfo>;
    getnewaddress(params: {
        request?: GetNewAddressRequest | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    getpeerinfo(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<PeerInfoResponse>;
    getreceivedbyaccount(params: {
        account: string;
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<number>;
    getreceivedbyaddress(params: {
        syscoinaddress: string;
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<number>;
    gettransaction(params: {
        txid: string;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<Transaction>;
    getunconfirmedbalance(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<number>;
    getwalletbalance(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<number>;
    getwalletinfo(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<WalletInfo>;
    importaddress(params: {
        request: ImportAddressRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    importprivkey(params: {
        request: ImportPrivKeyRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    importpubkey(params: {
        request: ImportPubKeyRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    importwallet(params: {
        request: ImportWalletRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    listaccounts(params: {
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<any>;
    listaddressgroupings(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<AddressGrouping[][]>;
    listreceivedbyaccount(params: {
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeempty?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<Account[]>;
    listreceivedbyaddress(params: {
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeempty?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<Account[]>;
    listsinceblock(params: {
        blockhash?: string | undefined;
        includeWatchonly?: boolean | undefined;
        targetConfirmations?: number | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<ListSinceBlockResponse[]>;
    listtransactions(params: {
        account?: string | undefined;
        count?: number | undefined;
        from?: number | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<TransactionListEntry[]>;
    sendfrom(params: {
        request: SendFromRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    sendmany(params: {
        request: SendManyRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    sendtoaddress(params: {
        request: SendToAddressRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    signmessage(params: {
        request: SignMessageRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    syscoindecoderawtransaction(params: {
        hexstring: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<any>;
    syscoinsendrawtransaction(params: {
        hexstring: SendRawTransactionRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    validateaddress(params: {
        syscoinaddress: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<ValidateAddressResponse>;
    verifymessage(params: {
        syscoinaddress: string;
        signature: string;
        message: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<boolean>;
    walletlock(configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    walletpassphrase(params: {
        request: WalletPassphraseRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
    walletpassphrasechange(params: {
        request: WalletPassphraseChangeRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string>;
};
/**
 * GeneralApi - object-oriented interface
 */
export declare class GeneralApi extends BaseAPI {
    /**
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
     * @param request
     */
    addmultisigaddress(params: {
        request: AddMultisigAddressRequest;
    }, options?: any): Promise<string>;
    /**
     * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    dumpprivkey(params: {
        address: string;
    }, options?: any): Promise<string>;
    /**
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    dumpwallet(params: {
        filename: string;
    }, options?: any): Promise<string>;
    /**
     * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
     * @param request
     */
    encryptwallet(params: {
        request: EncryptWalletRequest;
    }, options?: any): Promise<string>;
    /**
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    getaccount(params: {
        syscoinaddress: string;
    }, options?: any): Promise<string>;
    /**
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    getaccountaddress(params: {
        account: string;
    }, options?: any): Promise<string>;
    /**
     * Returns the balance for addresses or aliases
     * @param addresses
     */
    getaddressbalance(params: {
        addresses: Array<string>;
    }, options?: any): Promise<any>;
    /**
     * Returns all unspent outputs for addresses or aliases
     * @param addresses
     */
    getaddressutxos(params: {
        addresses: Array<string>;
    }, options?: any): Promise<GetAddressUTXOsEntry[]>;
    /**
     * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    getbalance(params: {
        account?: string;
        minconf?: number;
        addlockconf?: boolean;
        includeWatchonly?: boolean;
    }, options?: any): Promise<number>;
    /**
     * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
     * @param hash
     * @param verbose
     */
    getblock(params: {
        hash: string;
        verbose?: boolean;
    }, options?: any): Promise<GetBlockResponse>;
    /**
     * Returns an object containing various state info regarding block chain processing.
     */
    getblockchaininfo(options?: any): Promise<GetBlockchainInfoResponse>;
    /**
     * Returns the number of blocks in the longest block chain.
     */
    getblockcount(options?: any): Promise<number>;
    /**
     * Returns an object containing various state info.
     */
    getinfo(options?: any): Promise<Info>;
    /**
     * Returns a json object containing mining-related information.
     */
    getmininginfo(options?: any): Promise<MiningInfo>;
    /**
     * Returns a json object containing network-related information.
     */
    getnetworkinfo(options?: any): Promise<NetworkInfo>;
    /**
     * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
     * @param request
     */
    getnewaddress(params: {
        request?: GetNewAddressRequest;
    }, options?: any): Promise<string>;
    /**
     * Returns data about each connected network node as a json array of objects.
     */
    getpeerinfo(options?: any): Promise<PeerInfoResponse>;
    /**
     * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaccount(params: {
        account: string;
        minconf?: number;
        addlockconf?: boolean;
    }, options?: any): Promise<number>;
    /**
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaddress(params: {
        syscoinaddress: string;
        minconf?: number;
        addlockconf?: boolean;
    }, options?: any): Promise<number>;
    /**
     * Get detailed information about in-wallet transaction <txid>
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    gettransaction(params: {
        txid: string;
        includeWatchonly?: boolean;
    }, options?: any): Promise<Transaction>;
    /**
     * Returns the server's total unconfirmed balance
     */
    getunconfirmedbalance(options?: any): Promise<number>;
    /**
     * Returns wallet balance for all accounts. Does not include watch only accounts.
     */
    getwalletbalance(options?: any): Promise<number>;
    /**
     * Returns an object containing various wallet state info.
     */
    getwalletinfo(options?: any): Promise<WalletInfo>;
    /**
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importaddress(params: {
        request: ImportAddressRequest;
    }, options?: any): Promise<string>;
    /**
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request
     */
    importprivkey(params: {
        request: ImportPrivKeyRequest;
    }, options?: any): Promise<string>;
    /**
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importpubkey(params: {
        request: ImportPubKeyRequest;
    }, options?: any): Promise<string>;
    /**
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request
     */
    importwallet(params: {
        request: ImportWalletRequest;
    }, options?: any): Promise<string>;
    /**
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    listaccounts(params: {
        minconf?: number;
        addlockconf?: boolean;
        includeWatchonly?: boolean;
    }, options?: any): Promise<any>;
    /**
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    listaddressgroupings(options?: any): Promise<AddressGrouping[][]>;
    /**
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaccount(params: {
        minconf?: number;
        addlockconf?: boolean;
        includeempty?: boolean;
        includeWatchonly?: boolean;
    }, options?: any): Promise<Account[]>;
    /**
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaddress(params: {
        minconf?: number;
        addlockconf?: boolean;
        includeempty?: boolean;
        includeWatchonly?: boolean;
    }, options?: any): Promise<Account[]>;
    /**
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations
     */
    listsinceblock(params: {
        blockhash?: string;
        includeWatchonly?: boolean;
        targetConfirmations?: number;
    }, options?: any): Promise<ListSinceBlockResponse[]>;
    /**
     * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    listtransactions(params: {
        account?: string;
        count?: number;
        from?: number;
        includeWatchonly?: boolean;
    }, options?: any): Promise<TransactionListEntry[]>;
    /**
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendfrom(params: {
        request: SendFromRequest;
    }, options?: any): Promise<string>;
    /**
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendmany(params: {
        request: SendManyRequest;
    }, options?: any): Promise<string>;
    /**
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendtoaddress(params: {
        request: SendToAddressRequest;
    }, options?: any): Promise<string>;
    /**
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    signmessage(params: {
        request: SignMessageRequest;
    }, options?: any): Promise<string>;
    /**
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
     * @param hexstring
     */
    syscoindecoderawtransaction(params: {
        hexstring: string;
    }, options?: any): Promise<any>;
    /**
     * Signed raw transaction (serialized, hex-encoded) sent out to the network.
     * @param hexstring
     */
    syscoinsendrawtransaction(params: {
        hexstring: SendRawTransactionRequest;
    }, options?: any): Promise<string>;
    /**
     * Return information about the given syscoin address.
     * @param syscoinaddress
     */
    validateaddress(params: {
        syscoinaddress: string;
    }, options?: any): Promise<ValidateAddressResponse>;
    /**
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    verifymessage(params: {
        syscoinaddress: string;
        signature: string;
        message: string;
    }, options?: any): Promise<boolean>;
    /**
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    walletlock(options?: any): Promise<string>;
    /**
     * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request
     */
    walletpassphrase(params: {
        request: WalletPassphraseRequest;
    }, options?: any): Promise<string>;
    /**
     * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
     * @param request
     */
    walletpassphrasechange(params: {
        request: WalletPassphraseChangeRequest;
    }, options?: any): Promise<string>;
}
/**
 * GeneralApi - factory interface
 */
export declare const GeneralApiFactory: (fetch?: FetchAPI | undefined, basePath?: string | undefined) => {
    addmultisigaddress(params: {
        request: AddMultisigAddressRequest;
    }, configuration: Configuration, options?: any): any;
    dumpprivkey(params: {
        address: string;
    }, configuration: Configuration, options?: any): any;
    dumpwallet(params: {
        filename: string;
    }, configuration: Configuration, options?: any): any;
    encryptwallet(params: {
        request: EncryptWalletRequest;
    }, configuration: Configuration, options?: any): any;
    getaccount(params: {
        syscoinaddress: string;
    }, configuration: Configuration, options?: any): any;
    getaccountaddress(params: {
        account: string;
    }, configuration: Configuration, options?: any): any;
    getaddressbalance(params: {
        addresses: string[];
    }, configuration: Configuration, options?: any): any;
    getaddressutxos(params: {
        addresses: string[];
    }, configuration: Configuration, options?: any): any;
    getbalance(params: {
        account?: string | undefined;
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): any;
    getblock(params: {
        hash: string;
        verbose?: boolean | undefined;
    }, configuration: Configuration, options?: any): any;
    getblockchaininfo(configuration: Configuration, options?: any): any;
    getblockcount(configuration: Configuration, options?: any): any;
    getinfo(configuration: Configuration, options?: any): any;
    getmininginfo(configuration: Configuration, options?: any): any;
    getnetworkinfo(configuration: Configuration, options?: any): any;
    getnewaddress(params: {
        request?: GetNewAddressRequest | undefined;
    }, configuration: Configuration, options?: any): any;
    getpeerinfo(configuration: Configuration, options?: any): any;
    getreceivedbyaccount(params: {
        account: string;
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
    }, configuration: Configuration, options?: any): any;
    getreceivedbyaddress(params: {
        syscoinaddress: string;
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
    }, configuration: Configuration, options?: any): any;
    gettransaction(params: {
        txid: string;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): any;
    getunconfirmedbalance(configuration: Configuration, options?: any): any;
    getwalletbalance(configuration: Configuration, options?: any): any;
    getwalletinfo(configuration: Configuration, options?: any): any;
    importaddress(params: {
        request: ImportAddressRequest;
    }, configuration: Configuration, options?: any): any;
    importprivkey(params: {
        request: ImportPrivKeyRequest;
    }, configuration: Configuration, options?: any): any;
    importpubkey(params: {
        request: ImportPubKeyRequest;
    }, configuration: Configuration, options?: any): any;
    importwallet(params: {
        request: ImportWalletRequest;
    }, configuration: Configuration, options?: any): any;
    listaccounts(params: {
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): any;
    listaddressgroupings(configuration: Configuration, options?: any): any;
    listreceivedbyaccount(params: {
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeempty?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): any;
    listreceivedbyaddress(params: {
        minconf?: number | undefined;
        addlockconf?: boolean | undefined;
        includeempty?: boolean | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): any;
    listsinceblock(params: {
        blockhash?: string | undefined;
        includeWatchonly?: boolean | undefined;
        targetConfirmations?: number | undefined;
    }, configuration: Configuration, options?: any): any;
    listtransactions(params: {
        account?: string | undefined;
        count?: number | undefined;
        from?: number | undefined;
        includeWatchonly?: boolean | undefined;
    }, configuration: Configuration, options?: any): any;
    sendfrom(params: {
        request: SendFromRequest;
    }, configuration: Configuration, options?: any): any;
    sendmany(params: {
        request: SendManyRequest;
    }, configuration: Configuration, options?: any): any;
    sendtoaddress(params: {
        request: SendToAddressRequest;
    }, configuration: Configuration, options?: any): any;
    signmessage(params: {
        request: SignMessageRequest;
    }, configuration: Configuration, options?: any): any;
    syscoindecoderawtransaction(params: {
        hexstring: string;
    }, configuration: Configuration, options?: any): any;
    syscoinsendrawtransaction(params: {
        hexstring: SendRawTransactionRequest;
    }, configuration: Configuration, options?: any): any;
    validateaddress(params: {
        syscoinaddress: string;
    }, configuration: Configuration, options?: any): any;
    verifymessage(params: {
        syscoinaddress: string;
        signature: string;
        message: string;
    }, configuration: Configuration, options?: any): any;
    walletlock(configuration: Configuration, options?: any): any;
    walletpassphrase(params: {
        request: WalletPassphraseRequest;
    }, configuration: Configuration, options?: any): any;
    walletpassphrasechange(params: {
        request: WalletPassphraseChangeRequest;
    }, configuration: Configuration, options?: any): any;
};
/**
 * OffersApi - fetch parameter creator
 */
export declare const OffersApiFetchParamCreator: {
    offerfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    offerhistory(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): FetchArgs;
    offerinfo(params: {
        guid: string;
    }, configuration: Configuration, options?: any): FetchArgs;
    offerlink(params: {
        request: OfferLinkRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    offernew(params: {
        request: OfferNewRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
    offerupdate(params: {
        request: OfferUpdateRequest;
    }, configuration: Configuration, options?: any): FetchArgs;
};
/**
 * OffersApi - functional programming interface
 */
export declare const OffersApiFp: {
    offerfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<OfferIndex[]>;
    offerhistory(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<OfferHistoryIndex[]>;
    offerinfo(params: {
        guid: string;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<Offer>;
    offerlink(params: {
        request: OfferLinkRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    offernew(params: {
        request: OfferNewRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
    offerupdate(params: {
        request: OfferUpdateRequest;
    }, configuration: Configuration, options?: any): (fetch: FetchAPI, basePath?: string | undefined) => Promise<string[]>;
};
/**
 * OffersApi - object-oriented interface
 */
export declare class OffersApi extends BaseAPI {
    /**
     * scan and filter offers
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerfilter(params: {
        query: string;
        count?: string;
        from?: string;
    }, options?: any): Promise<OfferIndex[]>;
    /**
     * List all stored values of an offer.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerhistory(params: {
        query: string;
        count?: string;
        from?: string;
    }, options?: any): Promise<OfferHistoryIndex[]>;
    /**
     * Show values of an offer.
     * @param guid
     */
    offerinfo(params: {
        guid: string;
    }, options?: any): Promise<Offer>;
    /**
     * Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    offerlink(params: {
        request: OfferLinkRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    offernew(params: {
        request: OfferNewRequest;
    }, options?: any): Promise<string[]>;
    /**
     * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    offerupdate(params: {
        request: OfferUpdateRequest;
    }, options?: any): Promise<string[]>;
}
/**
 * OffersApi - factory interface
 */
export declare const OffersApiFactory: (fetch?: FetchAPI | undefined, basePath?: string | undefined) => {
    offerfilter(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    offerhistory(params: {
        query: string;
        count?: string | undefined;
        from?: string | undefined;
    }, configuration: Configuration, options?: any): any;
    offerinfo(params: {
        guid: string;
    }, configuration: Configuration, options?: any): any;
    offerlink(params: {
        request: OfferLinkRequest;
    }, configuration: Configuration, options?: any): any;
    offernew(params: {
        request: OfferNewRequest;
    }, configuration: Configuration, options?: any): any;
    offerupdate(params: {
        request: OfferUpdateRequest;
    }, configuration: Configuration, options?: any): any;
};
