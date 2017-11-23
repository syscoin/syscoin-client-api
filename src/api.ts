import { Configuration } from "./configuration";
import * as querystring from "querystring";
import * as url from "url";

import * as isomorphicFetch from "isomorphic-fetch";
import * as assign from "core-js/library/fn/object/assign";

interface Dictionary<T> { [index: string]: T; }
export interface FetchAPI { (url: string, init?: any): Promise<any>; }

const BASE_PATH = "http://localhost:8001".replace(/\/+$/, "");

export interface FetchArgs {
    url: string;
    options: any;
}

export class BaseAPI {
    basePath: string;
    fetch: FetchAPI;
    public configuration: Configuration;

    constructor(fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH, configuration: Configuration = new Configuration()) {
        this.basePath = basePath;
        this.fetch = fetch;
        this.configuration = configuration;
    }
};

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
export const AliasesApiFetchParamCreator = {
    /**
     * Add redeemscript to local wallet for signing smart contract based alias transactions.
     * @param redeemscript 
     */
    aliasaddscript(params: {  redeemscript: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "redeemscript" is set
        if (params["redeemscript"] == null) {
            throw new Error("Missing required parameter redeemscript when calling aliasaddscript");
        }
        const baseUrl = `/aliasaddscript`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "redeemscript": params["redeemscript"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
     * @param alias The syscoin alias to get balance for
     */
    aliasbalance(params: {  alias: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "alias" is set
        if (params["alias"] == null) {
            throw new Error("Missing required parameter alias when calling aliasbalance");
        }
        const baseUrl = `/aliasbalance`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "alias": params["alias"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Clear your whitelist(controls who can resell).
     * @param owneralias 
     * @param witness 
     */
    aliasclearwhitelist(params: {  owneralias: string; witness?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "owneralias" is set
        if (params["owneralias"] == null) {
            throw new Error("Missing required parameter owneralias when calling aliasclearwhitelist");
        }
        const baseUrl = `/aliasclearwhitelist`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "owneralias": params["owneralias"],
            "witness": params["witness"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * scan and filter aliases
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliasfilter(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling aliasfilter");
        }
        const baseUrl = `/aliasfilter`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all stored values of an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliashistory(params: {  query: string; count?: number; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling aliashistory");
        }
        const baseUrl = `/aliashistory`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Show values of an alias.
     * @param aliasname 
     */
    aliasinfo(params: {  aliasname: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "aliasname" is set
        if (params["aliasname"] == null) {
            throw new Error("Missing required parameter aliasname when calling aliasinfo");
        }
        const baseUrl = `/aliasinfo`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "aliasname": params["aliasname"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    aliasnew(params: {  request: AliasNewRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling aliasnew");
        }
        const baseUrl = `/aliasnew`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request 
     */
    aliaspay(params: {  request: AliasPayRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling aliaspay");
        }
        const baseUrl = `/aliaspay`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all stored transactions related to an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliastxhistory(params: {  query: string; count?: number; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling aliastxhistory");
        }
        const baseUrl = `/aliastxhistory`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    aliasupdate(params: {  request: AliasUpdateRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling aliasupdate");
        }
        const baseUrl = `/aliasupdate`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
     * @param request 
     */
    aliasupdatewhitelist(params: {  request: AliasUpdateWhitelistRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling aliasupdatewhitelist");
        }
        const baseUrl = `/aliasupdatewhitelist`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all affiliates for this alias.
     * @param alias 
     * @param witness 
     */
    aliaswhitelist(params: {  alias: string; witness?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "alias" is set
        if (params["alias"] == null) {
            throw new Error("Missing required parameter alias when calling aliaswhitelist");
        }
        const baseUrl = `/aliaswhitelist`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "alias": params["alias"],
            "witness": params["witness"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Clean expired Syscoin services from indexer and internal database.
     */
    prunesyscoinservices(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/prunesyscoinservices`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Query the indexer for information in a collection.
     * @param collection Collection name, either \\\&quot;alias\\\&quot;, \\\&quot;aliashistory\\\&quot;, \\\&quot;aliastxhistory\\\&quot;, \\\&quot;cert\\\&quot;,  \\\&quot;certhistory\\\&quot;, \\\&quot;offer\\\&quot;, \\\&quot;offerhistory\\\&quot;, \\\&quot;feedback\\\&quot;, \\\&quot;escrow\\\&quot;, \\\&quot;escrowbid\\\&quot;
     * @param query JSON query on the collection to retrieve a set of documents
     * @param options JSON option arguments into the query. Based on mongoc_collection_find_with_opts.
     */
    syscoinquery(params: {  collection: string; query: string; options?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "collection" is set
        if (params["collection"] == null) {
            throw new Error("Missing required parameter collection when calling syscoinquery");
        }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling syscoinquery");
        }
        const baseUrl = `/syscoinquery`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "collection": params["collection"],
            "query": params["query"],
            "options": params["options"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};

/**
 * AliasesApi - functional programming interface
 */
export const AliasesApiFp = {
    /**
     * Add redeemscript to local wallet for signing smart contract based alias transactions.
     * @param redeemscript 
     */
    aliasaddscript(params: { redeemscript: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = AliasesApiFetchParamCreator.aliasaddscript(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
     * @param alias The syscoin alias to get balance for
     */
    aliasbalance(params: { alias: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = AliasesApiFetchParamCreator.aliasbalance(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Clear your whitelist(controls who can resell).
     * @param owneralias 
     * @param witness 
     */
    aliasclearwhitelist(params: { owneralias: string; witness?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = AliasesApiFetchParamCreator.aliasclearwhitelist(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * scan and filter aliases
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliasfilter(params: { query: string; count?: string; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<AliasIndex>> {
        const fetchArgs = AliasesApiFetchParamCreator.aliasfilter(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all stored values of an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliashistory(params: { query: string; count?: number; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<AliasHistoryIndex>> {
        const fetchArgs = AliasesApiFetchParamCreator.aliashistory(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Show values of an alias.
     * @param aliasname 
     */
    aliasinfo(params: { aliasname: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Alias> {
        const fetchArgs = AliasesApiFetchParamCreator.aliasinfo(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    aliasnew(params: { request: AliasNewRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = AliasesApiFetchParamCreator.aliasnew(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request 
     */
    aliaspay(params: { request: AliasPayRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = AliasesApiFetchParamCreator.aliaspay(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all stored transactions related to an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliastxhistory(params: { query: string; count?: number; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<AliasTxHistoryIndex>> {
        const fetchArgs = AliasesApiFetchParamCreator.aliastxhistory(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    aliasupdate(params: { request: AliasUpdateRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = AliasesApiFetchParamCreator.aliasupdate(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
     * @param request 
     */
    aliasupdatewhitelist(params: { request: AliasUpdateWhitelistRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = AliasesApiFetchParamCreator.aliasupdatewhitelist(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all affiliates for this alias.
     * @param alias 
     * @param witness 
     */
    aliaswhitelist(params: { alias: string; witness?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<WhitelistEntry>> {
        const fetchArgs = AliasesApiFetchParamCreator.aliaswhitelist(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Clean expired Syscoin services from indexer and internal database.
     */
    prunesyscoinservices(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = AliasesApiFetchParamCreator.prunesyscoinservices(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Query the indexer for information in a collection.
     * @param collection Collection name, either \\\&quot;alias\\\&quot;, \\\&quot;aliashistory\\\&quot;, \\\&quot;aliastxhistory\\\&quot;, \\\&quot;cert\\\&quot;,  \\\&quot;certhistory\\\&quot;, \\\&quot;offer\\\&quot;, \\\&quot;offerhistory\\\&quot;, \\\&quot;feedback\\\&quot;, \\\&quot;escrow\\\&quot;, \\\&quot;escrowbid\\\&quot;
     * @param query JSON query on the collection to retrieve a set of documents
     * @param options JSON option arguments into the query. Based on mongoc_collection_find_with_opts.
     */
    syscoinquery(params: { collection: string; query: string; options?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = AliasesApiFetchParamCreator.syscoinquery(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * AliasesApi - object-oriented interface
 */
export class AliasesApi extends BaseAPI {
    /**
     * Add redeemscript to local wallet for signing smart contract based alias transactions.
     * @param redeemscript 
     */
    aliasaddscript(params: {  redeemscript: string; }, options: any = {}) {
        return AliasesApiFp.aliasaddscript(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
     * @param alias The syscoin alias to get balance for
     */
    aliasbalance(params: {  alias: string; }, options: any = {}) {
        return AliasesApiFp.aliasbalance(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Clear your whitelist(controls who can resell).
     * @param owneralias 
     * @param witness 
     */
    aliasclearwhitelist(params: {  owneralias: string; witness?: string; }, options: any = {}) {
        return AliasesApiFp.aliasclearwhitelist(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * scan and filter aliases
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliasfilter(params: {  query: string; count?: string; from?: string; }, options: any = {}) {
        return AliasesApiFp.aliasfilter(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * List all stored values of an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliashistory(params: {  query: string; count?: number; from?: string; }, options: any = {}) {
        return AliasesApiFp.aliashistory(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Show values of an alias.
     * @param aliasname 
     */
    aliasinfo(params: {  aliasname: string; }, options: any = {}) {
        return AliasesApiFp.aliasinfo(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    aliasnew(params: {  request: AliasNewRequest; }, options: any = {}) {
        return AliasesApiFp.aliasnew(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request 
     */
    aliaspay(params: {  request: AliasPayRequest; }, options: any = {}) {
        return AliasesApiFp.aliaspay(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * List all stored transactions related to an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliastxhistory(params: {  query: string; count?: number; from?: string; }, options: any = {}) {
        return AliasesApiFp.aliastxhistory(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    aliasupdate(params: {  request: AliasUpdateRequest; }, options: any = {}) {
        return AliasesApiFp.aliasupdate(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
     * @param request 
     */
    aliasupdatewhitelist(params: {  request: AliasUpdateWhitelistRequest; }, options: any = {}) {
        return AliasesApiFp.aliasupdatewhitelist(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * List all affiliates for this alias.
     * @param alias 
     * @param witness 
     */
    aliaswhitelist(params: {  alias: string; witness?: string; }, options: any = {}) {
        return AliasesApiFp.aliaswhitelist(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Clean expired Syscoin services from indexer and internal database.
     */
    prunesyscoinservices(options: any = {}) {
        return AliasesApiFp.prunesyscoinservices(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Query the indexer for information in a collection.
     * @param collection Collection name, either \\\&quot;alias\\\&quot;, \\\&quot;aliashistory\\\&quot;, \\\&quot;aliastxhistory\\\&quot;, \\\&quot;cert\\\&quot;,  \\\&quot;certhistory\\\&quot;, \\\&quot;offer\\\&quot;, \\\&quot;offerhistory\\\&quot;, \\\&quot;feedback\\\&quot;, \\\&quot;escrow\\\&quot;, \\\&quot;escrowbid\\\&quot;
     * @param query JSON query on the collection to retrieve a set of documents
     * @param options JSON option arguments into the query. Based on mongoc_collection_find_with_opts.
     */
    syscoinquery(params: {  collection: string; query: string; options?: string; }, options: any = {}) {
        return AliasesApiFp.syscoinquery(params, this.configuration, options)(this.fetch, this.basePath);
    }
};

/**
 * AliasesApi - factory interface
 */
export const AliasesApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Add redeemscript to local wallet for signing smart contract based alias transactions.
         * @param redeemscript 
         */
        aliasaddscript(params: {  redeemscript: string; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliasaddscript(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
         * @param alias The syscoin alias to get balance for
         */
        aliasbalance(params: {  alias: string; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliasbalance(params, configuration, options)(fetch, basePath);
        },
        /**
         * Clear your whitelist(controls who can resell).
         * @param owneralias 
         * @param witness 
         */
        aliasclearwhitelist(params: {  owneralias: string; witness?: string; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliasclearwhitelist(params, configuration, options)(fetch, basePath);
        },
        /**
         * scan and filter aliases
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        aliasfilter(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliasfilter(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all stored values of an alias.
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        aliashistory(params: {  query: string; count?: number; from?: string; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliashistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Show values of an alias.
         * @param aliasname 
         */
        aliasinfo(params: {  aliasname: string; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliasinfo(params, configuration, options)(fetch, basePath);
        },
        /**
         * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        aliasnew(params: {  request: AliasNewRequest; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliasnew(params, configuration, options)(fetch, basePath);
        },
        /**
         * Send multiple times from an alias. Amounts are double-precision floating point numbers.
         * @param request 
         */
        aliaspay(params: {  request: AliasPayRequest; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliaspay(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all stored transactions related to an alias.
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        aliastxhistory(params: {  query: string; count?: number; from?: string; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliastxhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        aliasupdate(params: {  request: AliasUpdateRequest; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliasupdate(params, configuration, options)(fetch, basePath);
        },
        /**
         * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
         * @param request 
         */
        aliasupdatewhitelist(params: {  request: AliasUpdateWhitelistRequest; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliasupdatewhitelist(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all affiliates for this alias.
         * @param alias 
         * @param witness 
         */
        aliaswhitelist(params: {  alias: string; witness?: string; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.aliaswhitelist(params, configuration, options)(fetch, basePath);
        },
        /**
         * Clean expired Syscoin services from indexer and internal database.
         */
        prunesyscoinservices(configuration: Configuration, options: any = {}) {
            return AliasesApiFp.prunesyscoinservices(configuration, options)(fetch, basePath);
        },
        /**
         * Query the indexer for information in a collection.
         * @param collection Collection name, either \\\&quot;alias\\\&quot;, \\\&quot;aliashistory\\\&quot;, \\\&quot;aliastxhistory\\\&quot;, \\\&quot;cert\\\&quot;,  \\\&quot;certhistory\\\&quot;, \\\&quot;offer\\\&quot;, \\\&quot;offerhistory\\\&quot;, \\\&quot;feedback\\\&quot;, \\\&quot;escrow\\\&quot;, \\\&quot;escrowbid\\\&quot;
         * @param query JSON query on the collection to retrieve a set of documents
         * @param options JSON option arguments into the query. Based on mongoc_collection_find_with_opts.
         */
        syscoinquery(params: {  collection: string; query: string; options?: string; }, configuration: Configuration, options: any = {}) {
            return AliasesApiFp.syscoinquery(params, configuration, options)(fetch, basePath);
        },
    };
};


/**
 * BlockmarketApi - fetch parameter creator
 */
export const BlockmarketApiFetchParamCreator = {
    /**
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    login(params: {  auth: string; }, options: any = {}): FetchArgs {
        // verify required parameter "auth" is set
        if (params["auth"] == null) {
            throw new Error("Missing required parameter auth when calling login");
        }
        const baseUrl = `/login`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "auth": params["auth"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
     * @param request 
     */
    storedata(params: {  request: StoreDataRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling storedata");
        }
        const baseUrl = `/storedata`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};

/**
 * BlockmarketApi - functional programming interface
 */
export const BlockmarketApiFp = {
    /**
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    login(params: { auth: string;  }, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<LoginResponse> {
        const fetchArgs = BlockmarketApiFetchParamCreator.login(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
     * @param request 
     */
    storedata(params: { request: StoreDataRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<StoreDataResponse> {
        const fetchArgs = BlockmarketApiFetchParamCreator.storedata(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * BlockmarketApi - object-oriented interface
 */
export class BlockmarketApi extends BaseAPI {
    /**
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    login(params: {  auth: string; }, options: any = {}) {
        return BlockmarketApiFp.login(params, options)(this.fetch, this.basePath);
    }
    /**
     * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
     * @param request 
     */
    storedata(params: {  request: StoreDataRequest; }, options: any = {}) {
        return BlockmarketApiFp.storedata(params, this.configuration, options)(this.fetch, this.basePath);
    }
};

/**
 * BlockmarketApi - factory interface
 */
export const BlockmarketApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Returns a session token for use with subsquent protected calls.
         * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
         */
        login(params: {  auth: string; }, options: any = {}) {
            return BlockmarketApiFp.login(params, options)(fetch, basePath);
        },
        /**
         * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
         * @param request 
         */
        storedata(params: {  request: StoreDataRequest; }, configuration: Configuration, options: any = {}) {
            return BlockmarketApiFp.storedata(params, configuration, options)(fetch, basePath);
        },
    };
};


/**
 * CertificatesApi - fetch parameter creator
 */
export const CertificatesApiFetchParamCreator = {
    /**
     * scan and filter certs
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certfilter(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling certfilter");
        }
        const baseUrl = `/certfilter`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all stored values of an cert.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certhistory(params: {  query: string; count?: number; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling certhistory");
        }
        const baseUrl = `/certhistory`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Show stored values of a single certificate.
     * @param guid 
     */
    certinfo(params: {  guid: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "guid" is set
        if (params["guid"] == null) {
            throw new Error("Missing required parameter guid when calling certinfo");
        }
        const baseUrl = `/certinfo`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "guid": params["guid"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    certnew(params: {  request: CertNewRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling certnew");
        }
        const baseUrl = `/certnew`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    certtransfer(params: {  request: CertTransferRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling certtransfer");
        }
        const baseUrl = `/certtransfer`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    certupdate(params: {  request: CertUpdateRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling certupdate");
        }
        const baseUrl = `/certupdate`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};

/**
 * CertificatesApi - functional programming interface
 */
export const CertificatesApiFp = {
    /**
     * scan and filter certs
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certfilter(params: { query: string; count?: string; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<CertIndex>> {
        const fetchArgs = CertificatesApiFetchParamCreator.certfilter(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all stored values of an cert.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certhistory(params: { query: string; count?: number; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<CertHistoryIndex>> {
        const fetchArgs = CertificatesApiFetchParamCreator.certhistory(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Show stored values of a single certificate.
     * @param guid 
     */
    certinfo(params: { guid: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Cert> {
        const fetchArgs = CertificatesApiFetchParamCreator.certinfo(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    certnew(params: { request: CertNewRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = CertificatesApiFetchParamCreator.certnew(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    certtransfer(params: { request: CertTransferRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = CertificatesApiFetchParamCreator.certtransfer(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    certupdate(params: { request: CertUpdateRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = CertificatesApiFetchParamCreator.certupdate(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * CertificatesApi - object-oriented interface
 */
export class CertificatesApi extends BaseAPI {
    /**
     * scan and filter certs
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certfilter(params: {  query: string; count?: string; from?: string; }, options: any = {}) {
        return CertificatesApiFp.certfilter(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * List all stored values of an cert.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certhistory(params: {  query: string; count?: number; from?: string; }, options: any = {}) {
        return CertificatesApiFp.certhistory(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Show stored values of a single certificate.
     * @param guid 
     */
    certinfo(params: {  guid: string; }, options: any = {}) {
        return CertificatesApiFp.certinfo(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    certnew(params: {  request: CertNewRequest; }, options: any = {}) {
        return CertificatesApiFp.certnew(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    certtransfer(params: {  request: CertTransferRequest; }, options: any = {}) {
        return CertificatesApiFp.certtransfer(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    certupdate(params: {  request: CertUpdateRequest; }, options: any = {}) {
        return CertificatesApiFp.certupdate(params, this.configuration, options)(this.fetch, this.basePath);
    }
};

/**
 * CertificatesApi - factory interface
 */
export const CertificatesApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * scan and filter certs
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        certfilter(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}) {
            return CertificatesApiFp.certfilter(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all stored values of an cert.
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        certhistory(params: {  query: string; count?: number; from?: string; }, configuration: Configuration, options: any = {}) {
            return CertificatesApiFp.certhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Show stored values of a single certificate.
         * @param guid 
         */
        certinfo(params: {  guid: string; }, configuration: Configuration, options: any = {}) {
            return CertificatesApiFp.certinfo(params, configuration, options)(fetch, basePath);
        },
        /**
         * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        certnew(params: {  request: CertNewRequest; }, configuration: Configuration, options: any = {}) {
            return CertificatesApiFp.certnew(params, configuration, options)(fetch, basePath);
        },
        /**
         * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        certtransfer(params: {  request: CertTransferRequest; }, configuration: Configuration, options: any = {}) {
            return CertificatesApiFp.certtransfer(params, configuration, options)(fetch, basePath);
        },
        /**
         * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        certupdate(params: {  request: CertUpdateRequest; }, configuration: Configuration, options: any = {}) {
            return CertificatesApiFp.certupdate(params, configuration, options)(fetch, basePath);
        },
    };
};


/**
 * EscrowApi - fetch parameter creator
 */
export const EscrowApiFetchParamCreator = {
    /**
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid 
     * @param witness 
     */
    escrowacknowledge(params: {  escrowguid: string; witness?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "escrowguid" is set
        if (params["escrowguid"] == null) {
            throw new Error("Missing required parameter escrowguid when calling escrowacknowledge");
        }
        const baseUrl = `/escrowacknowledge`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "escrowguid": params["escrowguid"],
            "witness": params["witness"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Add shipping to an escrow.
     * @param escrow GUID of escrow
     * @param shipping Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
     * @param witness Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    escrowaddshipping(params: {  escrow: string; shipping: string; witness?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "escrow" is set
        if (params["escrow"] == null) {
            throw new Error("Missing required parameter escrow when calling escrowaddshipping");
        }
        // verify required parameter "shipping" is set
        if (params["shipping"] == null) {
            throw new Error("Missing required parameter shipping when calling escrowaddshipping");
        }
        const baseUrl = `/escrowaddshipping`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "escrow": params["escrow"],
            "shipping": params["shipping"],
            "witness": params["witness"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Bid on an auction.
     * @param request 
     */
    escrowbid(params: {  request: EscrowBidRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowbid");
        }
        const baseUrl = `/escrowbid`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * scan and filter bids on escrow contracts
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowbidhistory(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling escrowbidhistory");
        }
        const baseUrl = `/escrowbidhistory`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request 
     */
    escrowcompleterefund(params: {  request: EscrowCompleteRefundRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowcompleterefund");
        }
        const baseUrl = `/escrowcompleterefund`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request 
     */
    escrowcompleterelease(params: {  request: EscrowCompleteReleaseRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowcompleterelease");
        }
        const baseUrl = `/escrowcompleterelease`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
     * @param request 
     */
    escrowcreaterawtransaction(params: {  request: EscrowCreateRawTransactionRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowcreaterawtransaction");
        }
        const baseUrl = `/escrowcreaterawtransaction`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
     * @param request 
     */
    escrowfeedback(params: {  request: EscrowFeedbackRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowfeedback");
        }
        const baseUrl = `/escrowfeedback`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * scan and filter feedbacks and ratings
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfeedbackhistory(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling escrowfeedbackhistory");
        }
        const baseUrl = `/escrowfeedbackhistory`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * scan and filter escrows
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfilter(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling escrowfilter");
        }
        const baseUrl = `/escrowfilter`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    escrowinfo(params: {  escrow: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "escrow" is set
        if (params["escrow"] == null) {
            throw new Error("Missing required parameter escrow when calling escrowinfo");
        }
        const baseUrl = `/escrowinfo`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "escrow": params["escrow"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Create new arbitrated Syscoin escrow.
     * @param request 
     */
    escrownew(params: {  request: EscrowNewRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrownew");
        }
        const baseUrl = `/escrownew`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
     * @param request 
     */
    escrowrefund(params: {  request: EscrowRefundRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowrefund");
        }
        const baseUrl = `/escrowrefund`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
     * @param request 
     */
    escrowrelease(params: {  request: EscrowReleaseRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowrelease");
        }
        const baseUrl = `/escrowrelease`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};

/**
 * EscrowApi - functional programming interface
 */
export const EscrowApiFp = {
    /**
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid 
     * @param witness 
     */
    escrowacknowledge(params: { escrowguid: string; witness?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowacknowledge(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Add shipping to an escrow.
     * @param escrow GUID of escrow
     * @param shipping Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
     * @param witness Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    escrowaddshipping(params: { escrow: string; shipping: string; witness?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowaddshipping(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Bid on an auction.
     * @param request 
     */
    escrowbid(params: { request: EscrowBidRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowbid(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * scan and filter bids on escrow contracts
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowbidhistory(params: { query: string; count?: string; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<EscrowBidIndex>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowbidhistory(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request 
     */
    escrowcompleterefund(params: { request: EscrowCompleteRefundRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowcompleterefund(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request 
     */
    escrowcompleterelease(params: { request: EscrowCompleteReleaseRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowcompleterelease(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
     * @param request 
     */
    escrowcreaterawtransaction(params: { request: EscrowCreateRawTransactionRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowcreaterawtransaction(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
     * @param request 
     */
    escrowfeedback(params: { request: EscrowFeedbackRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowfeedback(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * scan and filter feedbacks and ratings
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfeedbackhistory(params: { query: string; count?: string; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<EscrowFeedbackIndex>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowfeedbackhistory(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * scan and filter escrows
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfilter(params: { query: string; count?: string; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<EscrowIndex>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowfilter(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    escrowinfo(params: { escrow: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Escrow> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowinfo(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Create new arbitrated Syscoin escrow.
     * @param request 
     */
    escrownew(params: { request: EscrowNewRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrownew(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
     * @param request 
     */
    escrowrefund(params: { request: EscrowRefundRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowrefund(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
     * @param request 
     */
    escrowrelease(params: { request: EscrowReleaseRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = EscrowApiFetchParamCreator.escrowrelease(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * EscrowApi - object-oriented interface
 */
export class EscrowApi extends BaseAPI {
    /**
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid 
     * @param witness 
     */
    escrowacknowledge(params: {  escrowguid: string; witness?: string; }, options: any = {}) {
        return EscrowApiFp.escrowacknowledge(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Add shipping to an escrow.
     * @param escrow GUID of escrow
     * @param shipping Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
     * @param witness Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    escrowaddshipping(params: {  escrow: string; shipping: string; witness?: string; }, options: any = {}) {
        return EscrowApiFp.escrowaddshipping(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Bid on an auction.
     * @param request 
     */
    escrowbid(params: {  request: EscrowBidRequest; }, options: any = {}) {
        return EscrowApiFp.escrowbid(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * scan and filter bids on escrow contracts
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowbidhistory(params: {  query: string; count?: string; from?: string; }, options: any = {}) {
        return EscrowApiFp.escrowbidhistory(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request 
     */
    escrowcompleterefund(params: {  request: EscrowCompleteRefundRequest; }, options: any = {}) {
        return EscrowApiFp.escrowcompleterefund(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request 
     */
    escrowcompleterelease(params: {  request: EscrowCompleteReleaseRequest; }, options: any = {}) {
        return EscrowApiFp.escrowcompleterelease(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
     * @param request 
     */
    escrowcreaterawtransaction(params: {  request: EscrowCreateRawTransactionRequest; }, options: any = {}) {
        return EscrowApiFp.escrowcreaterawtransaction(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
     * @param request 
     */
    escrowfeedback(params: {  request: EscrowFeedbackRequest; }, options: any = {}) {
        return EscrowApiFp.escrowfeedback(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * scan and filter feedbacks and ratings
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfeedbackhistory(params: {  query: string; count?: string; from?: string; }, options: any = {}) {
        return EscrowApiFp.escrowfeedbackhistory(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * scan and filter escrows
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfilter(params: {  query: string; count?: string; from?: string; }, options: any = {}) {
        return EscrowApiFp.escrowfilter(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    escrowinfo(params: {  escrow: string; }, options: any = {}) {
        return EscrowApiFp.escrowinfo(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Create new arbitrated Syscoin escrow.
     * @param request 
     */
    escrownew(params: {  request: EscrowNewRequest; }, options: any = {}) {
        return EscrowApiFp.escrownew(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
     * @param request 
     */
    escrowrefund(params: {  request: EscrowRefundRequest; }, options: any = {}) {
        return EscrowApiFp.escrowrefund(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
     * @param request 
     */
    escrowrelease(params: {  request: EscrowReleaseRequest; }, options: any = {}) {
        return EscrowApiFp.escrowrelease(params, this.configuration, options)(this.fetch, this.basePath);
    }
};

/**
 * EscrowApi - factory interface
 */
export const EscrowApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
         * @param escrowguid 
         * @param witness 
         */
        escrowacknowledge(params: {  escrowguid: string; witness?: string; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowacknowledge(params, configuration, options)(fetch, basePath);
        },
        /**
         * Add shipping to an escrow.
         * @param escrow GUID of escrow
         * @param shipping Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
         * @param witness Witness alias name that will sign for web-of-trust notarization of this transaction.
         */
        escrowaddshipping(params: {  escrow: string; shipping: string; witness?: string; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowaddshipping(params, configuration, options)(fetch, basePath);
        },
        /**
         * Bid on an auction.
         * @param request 
         */
        escrowbid(params: {  request: EscrowBidRequest; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowbid(params, configuration, options)(fetch, basePath);
        },
        /**
         * scan and filter bids on escrow contracts
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        escrowbidhistory(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowbidhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
         * @param request 
         */
        escrowcompleterefund(params: {  request: EscrowCompleteRefundRequest; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowcompleterefund(params, configuration, options)(fetch, basePath);
        },
        /**
         * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
         * @param request 
         */
        escrowcompleterelease(params: {  request: EscrowCompleteReleaseRequest; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowcompleterelease(params, configuration, options)(fetch, basePath);
        },
        /**
         * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
         * @param request 
         */
        escrowcreaterawtransaction(params: {  request: EscrowCreateRawTransactionRequest; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowcreaterawtransaction(params, configuration, options)(fetch, basePath);
        },
        /**
         * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
         * @param request 
         */
        escrowfeedback(params: {  request: EscrowFeedbackRequest; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowfeedback(params, configuration, options)(fetch, basePath);
        },
        /**
         * scan and filter feedbacks and ratings
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        escrowfeedbackhistory(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowfeedbackhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * scan and filter escrows
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        escrowfilter(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowfilter(params, configuration, options)(fetch, basePath);
        },
        /**
         * Show stored values of a single escrow
         * @param escrow GUID of escrow
         */
        escrowinfo(params: {  escrow: string; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowinfo(params, configuration, options)(fetch, basePath);
        },
        /**
         * Create new arbitrated Syscoin escrow.
         * @param request 
         */
        escrownew(params: {  request: EscrowNewRequest; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrownew(params, configuration, options)(fetch, basePath);
        },
        /**
         * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
         * @param request 
         */
        escrowrefund(params: {  request: EscrowRefundRequest; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowrefund(params, configuration, options)(fetch, basePath);
        },
        /**
         * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
         * @param request 
         */
        escrowrelease(params: {  request: EscrowReleaseRequest; }, configuration: Configuration, options: any = {}) {
            return EscrowApiFp.escrowrelease(params, configuration, options)(fetch, basePath);
        },
    };
};


/**
 * GeneralApi - fetch parameter creator
 */
export const GeneralApiFetchParamCreator = {
    /**
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
     * @param request 
     */
    addmultisigaddress(params: {  request: AddMultisigAddressRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling addmultisigaddress");
        }
        const baseUrl = `/addmultisigaddress`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    dumpprivkey(params: {  address: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "address" is set
        if (params["address"] == null) {
            throw new Error("Missing required parameter address when calling dumpprivkey");
        }
        const baseUrl = `/dumpprivkey`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "address": params["address"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    dumpwallet(params: {  filename: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "filename" is set
        if (params["filename"] == null) {
            throw new Error("Missing required parameter filename when calling dumpwallet");
        }
        const baseUrl = `/dumpwallet`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "filename": params["filename"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
     * @param request 
     */
    encryptwallet(params: {  request: EncryptWalletRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling encryptwallet");
        }
        const baseUrl = `/encryptwallet`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    getaccount(params: {  syscoinaddress: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "syscoinaddress" is set
        if (params["syscoinaddress"] == null) {
            throw new Error("Missing required parameter syscoinaddress when calling getaccount");
        }
        const baseUrl = `/getaccount`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "syscoinaddress": params["syscoinaddress"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    getaccountaddress(params: {  account: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "account" is set
        if (params["account"] == null) {
            throw new Error("Missing required parameter account when calling getaccountaddress");
        }
        const baseUrl = `/getaccountaddress`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "account": params["account"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the balance for addresses or aliases
     * @param addresses 
     */
    getaddressbalance(params: {  addresses: Array<string>; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "addresses" is set
        if (params["addresses"] == null) {
            throw new Error("Missing required parameter addresses when calling getaddressbalance");
        }
        const baseUrl = `/getaddressbalance`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "addresses": params["addresses"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns all unspent outputs for addresses or aliases
     * @param addresses 
     */
    getaddressutxos(params: {  addresses: Array<string>; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "addresses" is set
        if (params["addresses"] == null) {
            throw new Error("Missing required parameter addresses when calling getaddressutxos");
        }
        const baseUrl = `/getaddressutxos`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "addresses": params["addresses"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    getbalance(params: {  account?: string; minconf?: number; addlockconf?: boolean; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getbalance`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "account": params["account"],
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
            "includeWatchonly": params["includeWatchonly"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
     * @param hash 
     * @param verbose 
     */
    getblock(params: {  hash: string; verbose?: boolean; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "hash" is set
        if (params["hash"] == null) {
            throw new Error("Missing required parameter hash when calling getblock");
        }
        const baseUrl = `/getblock`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "hash": params["hash"],
            "verbose": params["verbose"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns an object containing various state info regarding block chain processing.
     */
    getblockchaininfo(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getblockchaininfo`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the number of blocks in the longest block chain.
     */
    getblockcount(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getblockcount`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns an object containing various state info.
     */
    getinfo(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getinfo`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns a json object containing mining-related information.
     */
    getmininginfo(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getmininginfo`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns a json object containing network-related information.
     */
    getnetworkinfo(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getnetworkinfo`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
     * @param request 
     */
    getnewaddress(params: {  request?: GetNewAddressRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getnewaddress`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns data about each connected network node as a json array of objects.
     */
    getpeerinfo(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getpeerinfo`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaccount(params: {  account: string; minconf?: number; addlockconf?: boolean; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "account" is set
        if (params["account"] == null) {
            throw new Error("Missing required parameter account when calling getreceivedbyaccount");
        }
        const baseUrl = `/getreceivedbyaccount`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "account": params["account"],
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaddress(params: {  syscoinaddress: string; minconf?: number; addlockconf?: boolean; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "syscoinaddress" is set
        if (params["syscoinaddress"] == null) {
            throw new Error("Missing required parameter syscoinaddress when calling getreceivedbyaddress");
        }
        const baseUrl = `/getreceivedbyaddress`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "syscoinaddress": params["syscoinaddress"],
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Get detailed information about in-wallet transaction <txid>
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    gettransaction(params: {  txid: string; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "txid" is set
        if (params["txid"] == null) {
            throw new Error("Missing required parameter txid when calling gettransaction");
        }
        const baseUrl = `/gettransaction`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "txid": params["txid"],
            "includeWatchonly": params["includeWatchonly"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the server's total unconfirmed balance
     */
    getunconfirmedbalance(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getunconfirmedbalance`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns wallet balance for all accounts. Does not include watch only accounts.
     */
    getwalletbalance(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getwalletbalance`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns an object containing various wallet state info.
     */
    getwalletinfo(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/getwalletinfo`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request 
     */
    importaddress(params: {  request: ImportAddressRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling importaddress");
        }
        const baseUrl = `/importaddress`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request 
     */
    importprivkey(params: {  request: ImportPrivKeyRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling importprivkey");
        }
        const baseUrl = `/importprivkey`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request 
     */
    importpubkey(params: {  request: ImportPubKeyRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling importpubkey");
        }
        const baseUrl = `/importpubkey`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request 
     */
    importwallet(params: {  request: ImportWalletRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling importwallet");
        }
        const baseUrl = `/importwallet`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    listaccounts(params: {  minconf?: number; addlockconf?: boolean; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/listaccounts`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
            "includeWatchonly": params["includeWatchonly"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    listaddressgroupings(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/listaddressgroupings`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaccount(params: {  minconf?: number; addlockconf?: boolean; includeempty?: boolean; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/listreceivedbyaccount`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
            "includeempty": params["includeempty"],
            "includeWatchonly": params["includeWatchonly"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaddress(params: {  minconf?: number; addlockconf?: boolean; includeempty?: boolean; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/listreceivedbyaddress`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
            "includeempty": params["includeempty"],
            "includeWatchonly": params["includeWatchonly"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations 
     */
    listsinceblock(params: {  blockhash?: string; includeWatchonly?: boolean; targetConfirmations?: number; }, configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/listsinceblock`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "blockhash": params["blockhash"],
            "includeWatchonly": params["includeWatchonly"],
            "target-confirmations": params["targetConfirmations"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    listtransactions(params: {  account?: string; count?: number; from?: number; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/listtransactions`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "account": params["account"],
            "count": params["count"],
            "from": params["from"],
            "includeWatchonly": params["includeWatchonly"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    sendfrom(params: {  request: SendFromRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling sendfrom");
        }
        const baseUrl = `/sendfrom`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    sendmany(params: {  request: SendManyRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling sendmany");
        }
        const baseUrl = `/sendmany`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    sendtoaddress(params: {  request: SendToAddressRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling sendtoaddress");
        }
        const baseUrl = `/sendtoaddress`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    signmessage(params: {  request: SignMessageRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling signmessage");
        }
        const baseUrl = `/signmessage`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
     * @param hexstring 
     */
    syscoindecoderawtransaction(params: {  hexstring: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "hexstring" is set
        if (params["hexstring"] == null) {
            throw new Error("Missing required parameter hexstring when calling syscoindecoderawtransaction");
        }
        const baseUrl = `/syscoindecoderawtransaction`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["hexstring"]) {
            fetchOptions.body = JSON.stringify(params["hexstring"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Signed raw transaction (serialized, hex-encoded) sent out to the network.
     * @param hexstring 
     */
    syscoinsendrawtransaction(params: {  hexstring: SendRawTransactionRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "hexstring" is set
        if (params["hexstring"] == null) {
            throw new Error("Missing required parameter hexstring when calling syscoinsendrawtransaction");
        }
        const baseUrl = `/syscoinsendrawtransaction`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["hexstring"]) {
            fetchOptions.body = JSON.stringify(params["hexstring"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Return information about the given syscoin address.
     * @param syscoinaddress 
     */
    validateaddress(params: {  syscoinaddress: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "syscoinaddress" is set
        if (params["syscoinaddress"] == null) {
            throw new Error("Missing required parameter syscoinaddress when calling validateaddress");
        }
        const baseUrl = `/validateaddress`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "syscoinaddress": params["syscoinaddress"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    verifymessage(params: {  syscoinaddress: string; signature: string; message: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "syscoinaddress" is set
        if (params["syscoinaddress"] == null) {
            throw new Error("Missing required parameter syscoinaddress when calling verifymessage");
        }
        // verify required parameter "signature" is set
        if (params["signature"] == null) {
            throw new Error("Missing required parameter signature when calling verifymessage");
        }
        // verify required parameter "message" is set
        if (params["message"] == null) {
            throw new Error("Missing required parameter message when calling verifymessage");
        }
        const baseUrl = `/verifymessage`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "syscoinaddress": params["syscoinaddress"],
            "signature": params["signature"],
            "message": params["message"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    walletlock(configuration: Configuration, options: any = {}): FetchArgs {
        const baseUrl = `/walletlock`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request 
     */
    walletpassphrase(params: {  request: WalletPassphraseRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling walletpassphrase");
        }
        const baseUrl = `/walletpassphrase`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
     * @param request 
     */
    walletpassphrasechange(params: {  request: WalletPassphraseChangeRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling walletpassphrasechange");
        }
        const baseUrl = `/walletpassphrasechange`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};

/**
 * GeneralApi - functional programming interface
 */
export const GeneralApiFp = {
    /**
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
     * @param request 
     */
    addmultisigaddress(params: { request: AddMultisigAddressRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.addmultisigaddress(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    dumpprivkey(params: { address: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.dumpprivkey(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    dumpwallet(params: { filename: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.dumpwallet(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
     * @param request 
     */
    encryptwallet(params: { request: EncryptWalletRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.encryptwallet(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    getaccount(params: { syscoinaddress: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.getaccount(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    getaccountaddress(params: { account: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.getaccountaddress(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the balance for addresses or aliases
     * @param addresses 
     */
    getaddressbalance(params: { addresses: Array<string>;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = GeneralApiFetchParamCreator.getaddressbalance(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns all unspent outputs for addresses or aliases
     * @param addresses 
     */
    getaddressutxos(params: { addresses: Array<string>;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<GetAddressUTXOsEntry>> {
        const fetchArgs = GeneralApiFetchParamCreator.getaddressutxos(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    getbalance(params: { account?: string; minconf?: number; addlockconf?: boolean; includeWatchonly?: boolean;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<number> {
        const fetchArgs = GeneralApiFetchParamCreator.getbalance(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
     * @param hash 
     * @param verbose 
     */
    getblock(params: { hash: string; verbose?: boolean;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<GetBlockResponse> {
        const fetchArgs = GeneralApiFetchParamCreator.getblock(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns an object containing various state info regarding block chain processing.
     */
    getblockchaininfo(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<GetBlockchainInfoResponse> {
        const fetchArgs = GeneralApiFetchParamCreator.getblockchaininfo(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the number of blocks in the longest block chain.
     */
    getblockcount(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<number> {
        const fetchArgs = GeneralApiFetchParamCreator.getblockcount(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns an object containing various state info.
     */
    getinfo(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Info> {
        const fetchArgs = GeneralApiFetchParamCreator.getinfo(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns a json object containing mining-related information.
     */
    getmininginfo(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<MiningInfo> {
        const fetchArgs = GeneralApiFetchParamCreator.getmininginfo(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns a json object containing network-related information.
     */
    getnetworkinfo(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<NetworkInfo> {
        const fetchArgs = GeneralApiFetchParamCreator.getnetworkinfo(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
     * @param request 
     */
    getnewaddress(params: { request?: GetNewAddressRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.getnewaddress(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns data about each connected network node as a json array of objects.
     */
    getpeerinfo(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<PeerInfoResponse> {
        const fetchArgs = GeneralApiFetchParamCreator.getpeerinfo(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaccount(params: { account: string; minconf?: number; addlockconf?: boolean;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<number> {
        const fetchArgs = GeneralApiFetchParamCreator.getreceivedbyaccount(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaddress(params: { syscoinaddress: string; minconf?: number; addlockconf?: boolean;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<number> {
        const fetchArgs = GeneralApiFetchParamCreator.getreceivedbyaddress(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Get detailed information about in-wallet transaction <txid>
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    gettransaction(params: { txid: string; includeWatchonly?: boolean;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Transaction> {
        const fetchArgs = GeneralApiFetchParamCreator.gettransaction(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the server's total unconfirmed balance
     */
    getunconfirmedbalance(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<number> {
        const fetchArgs = GeneralApiFetchParamCreator.getunconfirmedbalance(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns wallet balance for all accounts. Does not include watch only accounts.
     */
    getwalletbalance(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<number> {
        const fetchArgs = GeneralApiFetchParamCreator.getwalletbalance(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns an object containing various wallet state info.
     */
    getwalletinfo(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<WalletInfo> {
        const fetchArgs = GeneralApiFetchParamCreator.getwalletinfo(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request 
     */
    importaddress(params: { request: ImportAddressRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.importaddress(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request 
     */
    importprivkey(params: { request: ImportPrivKeyRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.importprivkey(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request 
     */
    importpubkey(params: { request: ImportPubKeyRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.importpubkey(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request 
     */
    importwallet(params: { request: ImportWalletRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.importwallet(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    listaccounts(params: { minconf?: number; addlockconf?: boolean; includeWatchonly?: boolean;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = GeneralApiFetchParamCreator.listaccounts(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    listaddressgroupings(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<Array<AddressGrouping>>> {
        const fetchArgs = GeneralApiFetchParamCreator.listaddressgroupings(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaccount(params: { minconf?: number; addlockconf?: boolean; includeempty?: boolean; includeWatchonly?: boolean;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<Account>> {
        const fetchArgs = GeneralApiFetchParamCreator.listreceivedbyaccount(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaddress(params: { minconf?: number; addlockconf?: boolean; includeempty?: boolean; includeWatchonly?: boolean;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<Account>> {
        const fetchArgs = GeneralApiFetchParamCreator.listreceivedbyaddress(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations 
     */
    listsinceblock(params: { blockhash?: string; includeWatchonly?: boolean; targetConfirmations?: number;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<ListSinceBlockResponse>> {
        const fetchArgs = GeneralApiFetchParamCreator.listsinceblock(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    listtransactions(params: { account?: string; count?: number; from?: number; includeWatchonly?: boolean;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<TransactionListEntry>> {
        const fetchArgs = GeneralApiFetchParamCreator.listtransactions(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    sendfrom(params: { request: SendFromRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.sendfrom(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    sendmany(params: { request: SendManyRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.sendmany(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    sendtoaddress(params: { request: SendToAddressRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.sendtoaddress(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    signmessage(params: { request: SignMessageRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.signmessage(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
     * @param hexstring 
     */
    syscoindecoderawtransaction(params: { hexstring: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = GeneralApiFetchParamCreator.syscoindecoderawtransaction(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Signed raw transaction (serialized, hex-encoded) sent out to the network.
     * @param hexstring 
     */
    syscoinsendrawtransaction(params: { hexstring: SendRawTransactionRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.syscoinsendrawtransaction(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Return information about the given syscoin address.
     * @param syscoinaddress 
     */
    validateaddress(params: { syscoinaddress: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<ValidateAddressResponse> {
        const fetchArgs = GeneralApiFetchParamCreator.validateaddress(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    verifymessage(params: { syscoinaddress: string; signature: string; message: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<boolean> {
        const fetchArgs = GeneralApiFetchParamCreator.verifymessage(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    walletlock(configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.walletlock(configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request 
     */
    walletpassphrase(params: { request: WalletPassphraseRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.walletpassphrase(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
     * @param request 
     */
    walletpassphrasechange(params: { request: WalletPassphraseChangeRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<string> {
        const fetchArgs = GeneralApiFetchParamCreator.walletpassphrasechange(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * GeneralApi - object-oriented interface
 */
export class GeneralApi extends BaseAPI {
    /**
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
     * @param request 
     */
    addmultisigaddress(params: {  request: AddMultisigAddressRequest; }, options: any = {}) {
        return GeneralApiFp.addmultisigaddress(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    dumpprivkey(params: {  address: string; }, options: any = {}) {
        return GeneralApiFp.dumpprivkey(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    dumpwallet(params: {  filename: string; }, options: any = {}) {
        return GeneralApiFp.dumpwallet(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
     * @param request 
     */
    encryptwallet(params: {  request: EncryptWalletRequest; }, options: any = {}) {
        return GeneralApiFp.encryptwallet(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    getaccount(params: {  syscoinaddress: string; }, options: any = {}) {
        return GeneralApiFp.getaccount(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    getaccountaddress(params: {  account: string; }, options: any = {}) {
        return GeneralApiFp.getaccountaddress(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns the balance for addresses or aliases
     * @param addresses 
     */
    getaddressbalance(params: {  addresses: Array<string>; }, options: any = {}) {
        return GeneralApiFp.getaddressbalance(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns all unspent outputs for addresses or aliases
     * @param addresses 
     */
    getaddressutxos(params: {  addresses: Array<string>; }, options: any = {}) {
        return GeneralApiFp.getaddressutxos(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    getbalance(params: {  account?: string; minconf?: number; addlockconf?: boolean; includeWatchonly?: boolean; }, options: any = {}) {
        return GeneralApiFp.getbalance(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
     * @param hash 
     * @param verbose 
     */
    getblock(params: {  hash: string; verbose?: boolean; }, options: any = {}) {
        return GeneralApiFp.getblock(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns an object containing various state info regarding block chain processing.
     */
    getblockchaininfo(options: any = {}) {
        return GeneralApiFp.getblockchaininfo(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns the number of blocks in the longest block chain.
     */
    getblockcount(options: any = {}) {
        return GeneralApiFp.getblockcount(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns an object containing various state info.
     */
    getinfo(options: any = {}) {
        return GeneralApiFp.getinfo(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns a json object containing mining-related information.
     */
    getmininginfo(options: any = {}) {
        return GeneralApiFp.getmininginfo(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns a json object containing network-related information.
     */
    getnetworkinfo(options: any = {}) {
        return GeneralApiFp.getnetworkinfo(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
     * @param request 
     */
    getnewaddress(params: {  request?: GetNewAddressRequest; }, options: any = {}) {
        return GeneralApiFp.getnewaddress(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns data about each connected network node as a json array of objects.
     */
    getpeerinfo(options: any = {}) {
        return GeneralApiFp.getpeerinfo(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaccount(params: {  account: string; minconf?: number; addlockconf?: boolean; }, options: any = {}) {
        return GeneralApiFp.getreceivedbyaccount(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaddress(params: {  syscoinaddress: string; minconf?: number; addlockconf?: boolean; }, options: any = {}) {
        return GeneralApiFp.getreceivedbyaddress(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Get detailed information about in-wallet transaction <txid>
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    gettransaction(params: {  txid: string; includeWatchonly?: boolean; }, options: any = {}) {
        return GeneralApiFp.gettransaction(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns the server's total unconfirmed balance
     */
    getunconfirmedbalance(options: any = {}) {
        return GeneralApiFp.getunconfirmedbalance(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns wallet balance for all accounts. Does not include watch only accounts.
     */
    getwalletbalance(options: any = {}) {
        return GeneralApiFp.getwalletbalance(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns an object containing various wallet state info.
     */
    getwalletinfo(options: any = {}) {
        return GeneralApiFp.getwalletinfo(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request 
     */
    importaddress(params: {  request: ImportAddressRequest; }, options: any = {}) {
        return GeneralApiFp.importaddress(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request 
     */
    importprivkey(params: {  request: ImportPrivKeyRequest; }, options: any = {}) {
        return GeneralApiFp.importprivkey(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request 
     */
    importpubkey(params: {  request: ImportPubKeyRequest; }, options: any = {}) {
        return GeneralApiFp.importpubkey(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request 
     */
    importwallet(params: {  request: ImportWalletRequest; }, options: any = {}) {
        return GeneralApiFp.importwallet(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    listaccounts(params: {  minconf?: number; addlockconf?: boolean; includeWatchonly?: boolean; }, options: any = {}) {
        return GeneralApiFp.listaccounts(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    listaddressgroupings(options: any = {}) {
        return GeneralApiFp.listaddressgroupings(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaccount(params: {  minconf?: number; addlockconf?: boolean; includeempty?: boolean; includeWatchonly?: boolean; }, options: any = {}) {
        return GeneralApiFp.listreceivedbyaccount(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaddress(params: {  minconf?: number; addlockconf?: boolean; includeempty?: boolean; includeWatchonly?: boolean; }, options: any = {}) {
        return GeneralApiFp.listreceivedbyaddress(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations 
     */
    listsinceblock(params: {  blockhash?: string; includeWatchonly?: boolean; targetConfirmations?: number; }, options: any = {}) {
        return GeneralApiFp.listsinceblock(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    listtransactions(params: {  account?: string; count?: number; from?: number; includeWatchonly?: boolean; }, options: any = {}) {
        return GeneralApiFp.listtransactions(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    sendfrom(params: {  request: SendFromRequest; }, options: any = {}) {
        return GeneralApiFp.sendfrom(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    sendmany(params: {  request: SendManyRequest; }, options: any = {}) {
        return GeneralApiFp.sendmany(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    sendtoaddress(params: {  request: SendToAddressRequest; }, options: any = {}) {
        return GeneralApiFp.sendtoaddress(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    signmessage(params: {  request: SignMessageRequest; }, options: any = {}) {
        return GeneralApiFp.signmessage(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
     * @param hexstring 
     */
    syscoindecoderawtransaction(params: {  hexstring: string; }, options: any = {}) {
        return GeneralApiFp.syscoindecoderawtransaction(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Signed raw transaction (serialized, hex-encoded) sent out to the network.
     * @param hexstring 
     */
    syscoinsendrawtransaction(params: {  hexstring: SendRawTransactionRequest; }, options: any = {}) {
        return GeneralApiFp.syscoinsendrawtransaction(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Return information about the given syscoin address.
     * @param syscoinaddress 
     */
    validateaddress(params: {  syscoinaddress: string; }, options: any = {}) {
        return GeneralApiFp.validateaddress(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    verifymessage(params: {  syscoinaddress: string; signature: string; message: string; }, options: any = {}) {
        return GeneralApiFp.verifymessage(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    walletlock(options: any = {}) {
        return GeneralApiFp.walletlock(this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request 
     */
    walletpassphrase(params: {  request: WalletPassphraseRequest; }, options: any = {}) {
        return GeneralApiFp.walletpassphrase(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
     * @param request 
     */
    walletpassphrasechange(params: {  request: WalletPassphraseChangeRequest; }, options: any = {}) {
        return GeneralApiFp.walletpassphrasechange(params, this.configuration, options)(this.fetch, this.basePath);
    }
};

/**
 * GeneralApi - factory interface
 */
export const GeneralApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
         * @param request 
         */
        addmultisigaddress(params: {  request: AddMultisigAddressRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.addmultisigaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
         * @param address The syscoin address for the private key
         */
        dumpprivkey(params: {  address: string; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.dumpprivkey(params, configuration, options)(fetch, basePath);
        },
        /**
         * Dumps all wallet keys in a human-readable format.
         * @param filename The filename
         */
        dumpwallet(params: {  filename: string; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.dumpwallet(params, configuration, options)(fetch, basePath);
        },
        /**
         * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
         * @param request 
         */
        encryptwallet(params: {  request: EncryptWalletRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.encryptwallet(params, configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. Returns the account associated with the given address.
         * @param syscoinaddress The syscoin address for account lookup.
         */
        getaccount(params: {  syscoinaddress: string; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getaccount(params, configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
         * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
         */
        getaccountaddress(params: {  account: string; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getaccountaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns the balance for addresses or aliases
         * @param addresses 
         */
        getaddressbalance(params: {  addresses: Array<string>; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getaddressbalance(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns all unspent outputs for addresses or aliases
         * @param addresses 
         */
        getaddressutxos(params: {  addresses: Array<string>; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getaddressutxos(params, configuration, options)(fetch, basePath);
        },
        /**
         * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
         * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
         */
        getbalance(params: {  account?: string; minconf?: number; addlockconf?: boolean; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getbalance(params, configuration, options)(fetch, basePath);
        },
        /**
         * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
         * @param hash 
         * @param verbose 
         */
        getblock(params: {  hash: string; verbose?: boolean; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getblock(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns an object containing various state info regarding block chain processing.
         */
        getblockchaininfo(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getblockchaininfo(configuration, options)(fetch, basePath);
        },
        /**
         * Returns the number of blocks in the longest block chain.
         */
        getblockcount(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getblockcount(configuration, options)(fetch, basePath);
        },
        /**
         * Returns an object containing various state info.
         */
        getinfo(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getinfo(configuration, options)(fetch, basePath);
        },
        /**
         * Returns a json object containing mining-related information.
         */
        getmininginfo(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getmininginfo(configuration, options)(fetch, basePath);
        },
        /**
         * Returns a json object containing network-related information.
         */
        getnetworkinfo(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getnetworkinfo(configuration, options)(fetch, basePath);
        },
        /**
         * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
         * @param request 
         */
        getnewaddress(params: {  request?: GetNewAddressRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getnewaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns data about each connected network node as a json array of objects.
         */
        getpeerinfo(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getpeerinfo(configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
         * @param account The selected account, may be the default account using \&quot;\&quot;.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         */
        getreceivedbyaccount(params: {  account: string; minconf?: number; addlockconf?: boolean; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getreceivedbyaccount(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
         * @param syscoinaddress The syscoin address for transactions.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         */
        getreceivedbyaddress(params: {  syscoinaddress: string; minconf?: number; addlockconf?: boolean; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getreceivedbyaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Get detailed information about in-wallet transaction <txid>
         * @param txid The transaction id
         * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
         */
        gettransaction(params: {  txid: string; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.gettransaction(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns the server's total unconfirmed balance
         */
        getunconfirmedbalance(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getunconfirmedbalance(configuration, options)(fetch, basePath);
        },
        /**
         * Returns wallet balance for all accounts. Does not include watch only accounts.
         */
        getwalletbalance(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getwalletbalance(configuration, options)(fetch, basePath);
        },
        /**
         * Returns an object containing various wallet state info.
         */
        getwalletinfo(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.getwalletinfo(configuration, options)(fetch, basePath);
        },
        /**
         * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
         * @param request 
         */
        importaddress(params: {  request: ImportAddressRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.importaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Adds a private key (as returned by dumpprivkey) to your wallet.
         * @param request 
         */
        importprivkey(params: {  request: ImportPrivKeyRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.importprivkey(params, configuration, options)(fetch, basePath);
        },
        /**
         * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
         * @param request 
         */
        importpubkey(params: {  request: ImportPubKeyRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.importpubkey(params, configuration, options)(fetch, basePath);
        },
        /**
         * Imports keys from a wallet dump file (see dumpwallet).
         * @param request 
         */
        importwallet(params: {  request: ImportWalletRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.importwallet(params, configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. Returns Object that has account names as keys, account balances as values.
         * @param minconf Only include transactions with at least this many confirmations
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
         */
        listaccounts(params: {  minconf?: number; addlockconf?: boolean; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.listaccounts(params, configuration, options)(fetch, basePath);
        },
        /**
         * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
         */
        listaddressgroupings(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.listaddressgroupings(configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. List balances by account.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         * @param includeempty Whether to include accounts that haven&#39;t received any payments.
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         */
        listreceivedbyaccount(params: {  minconf?: number; addlockconf?: boolean; includeempty?: boolean; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.listreceivedbyaccount(params, configuration, options)(fetch, basePath);
        },
        /**
         * List balances by receiving address.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         * @param includeempty Whether to include accounts that haven&#39;t received any payments.
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         */
        listreceivedbyaddress(params: {  minconf?: number; addlockconf?: boolean; includeempty?: boolean; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.listreceivedbyaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Get all transactions in blocks since block [blockhash], or all transactions if omitted
         * @param blockhash The block hash to list transactions since
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         * @param targetConfirmations 
         */
        listsinceblock(params: {  blockhash?: string; includeWatchonly?: boolean; targetConfirmations?: number; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.listsinceblock(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
         * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
         * @param count The number of transactions to return
         * @param from The number of transactions to skip
         * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
         */
        listtransactions(params: {  account?: string; count?: number; from?: number; includeWatchonly?: boolean; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.listtransactions(params, configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        sendfrom(params: {  request: SendFromRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.sendfrom(params, configuration, options)(fetch, basePath);
        },
        /**
         * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        sendmany(params: {  request: SendManyRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.sendmany(params, configuration, options)(fetch, basePath);
        },
        /**
         * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        sendtoaddress(params: {  request: SendToAddressRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.sendtoaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        signmessage(params: {  request: SignMessageRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.signmessage(params, configuration, options)(fetch, basePath);
        },
        /**
         * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
         * @param hexstring 
         */
        syscoindecoderawtransaction(params: {  hexstring: string; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.syscoindecoderawtransaction(params, configuration, options)(fetch, basePath);
        },
        /**
         * Signed raw transaction (serialized, hex-encoded) sent out to the network.
         * @param hexstring 
         */
        syscoinsendrawtransaction(params: {  hexstring: SendRawTransactionRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.syscoinsendrawtransaction(params, configuration, options)(fetch, basePath);
        },
        /**
         * Return information about the given syscoin address.
         * @param syscoinaddress 
         */
        validateaddress(params: {  syscoinaddress: string; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.validateaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Verify a signed message
         * @param syscoinaddress The syscoin address to use for the signature.
         * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
         * @param message The message that was signed.
         */
        verifymessage(params: {  syscoinaddress: string; signature: string; message: string; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.verifymessage(params, configuration, options)(fetch, basePath);
        },
        /**
         * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
         */
        walletlock(configuration: Configuration, options: any = {}) {
            return GeneralApiFp.walletlock(configuration, options)(fetch, basePath);
        },
        /**
         * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
         * @param request 
         */
        walletpassphrase(params: {  request: WalletPassphraseRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.walletpassphrase(params, configuration, options)(fetch, basePath);
        },
        /**
         * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
         * @param request 
         */
        walletpassphrasechange(params: {  request: WalletPassphraseChangeRequest; }, configuration: Configuration, options: any = {}) {
            return GeneralApiFp.walletpassphrasechange(params, configuration, options)(fetch, basePath);
        },
    };
};


/**
 * OffersApi - fetch parameter creator
 */
export const OffersApiFetchParamCreator = {
    /**
     * scan and filter offers
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerfilter(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling offerfilter");
        }
        const baseUrl = `/offerfilter`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all stored values of an offer.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerhistory(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling offerhistory");
        }
        const baseUrl = `/offerhistory`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Show values of an offer.
     * @param guid 
     */
    offerinfo(params: {  guid: string; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "guid" is set
        if (params["guid"] == null) {
            throw new Error("Missing required parameter guid when calling offerinfo");
        }
        const baseUrl = `/offerinfo`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "guid": params["guid"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    offerlink(params: {  request: OfferLinkRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling offerlink");
        }
        const baseUrl = `/offerlink`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    offernew(params: {  request: OfferNewRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling offernew");
        }
        const baseUrl = `/offernew`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    offerupdate(params: {  request: OfferUpdateRequest; }, configuration: Configuration, options: any = {}): FetchArgs {
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling offerupdate");
        }
        const baseUrl = `/offerupdate`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                    "token": configuration.apiKey.token,
                    }, contentTypeHeader);
        }

        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};

/**
 * OffersApi - functional programming interface
 */
export const OffersApiFp = {
    /**
     * scan and filter offers
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerfilter(params: { query: string; count?: string; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<OfferIndex>> {
        const fetchArgs = OffersApiFetchParamCreator.offerfilter(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all stored values of an offer.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerhistory(params: { query: string; count?: string; from?: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<OfferHistoryIndex>> {
        const fetchArgs = OffersApiFetchParamCreator.offerhistory(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Show values of an offer.
     * @param guid 
     */
    offerinfo(params: { guid: string;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Offer> {
        const fetchArgs = OffersApiFetchParamCreator.offerinfo(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    offerlink(params: { request: OfferLinkRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = OffersApiFetchParamCreator.offerlink(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    offernew(params: { request: OfferNewRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = OffersApiFetchParamCreator.offernew(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /**
     * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    offerupdate(params: { request: OfferUpdateRequest;  }, configuration: Configuration, options: any = {}): (fetch: FetchAPI, basePath?: string) => Promise<Array<string>> {
        const fetchArgs = OffersApiFetchParamCreator.offerupdate(params, configuration, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * OffersApi - object-oriented interface
 */
export class OffersApi extends BaseAPI {
    /**
     * scan and filter offers
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerfilter(params: {  query: string; count?: string; from?: string; }, options: any = {}) {
        return OffersApiFp.offerfilter(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * List all stored values of an offer.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerhistory(params: {  query: string; count?: string; from?: string; }, options: any = {}) {
        return OffersApiFp.offerhistory(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Show values of an offer.
     * @param guid 
     */
    offerinfo(params: {  guid: string; }, options: any = {}) {
        return OffersApiFp.offerinfo(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    offerlink(params: {  request: OfferLinkRequest; }, options: any = {}) {
        return OffersApiFp.offerlink(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    offernew(params: {  request: OfferNewRequest; }, options: any = {}) {
        return OffersApiFp.offernew(params, this.configuration, options)(this.fetch, this.basePath);
    }
    /**
     * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    offerupdate(params: {  request: OfferUpdateRequest; }, options: any = {}) {
        return OffersApiFp.offerupdate(params, this.configuration, options)(this.fetch, this.basePath);
    }
};

/**
 * OffersApi - factory interface
 */
export const OffersApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * scan and filter offers
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        offerfilter(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}) {
            return OffersApiFp.offerfilter(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all stored values of an offer.
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        offerhistory(params: {  query: string; count?: string; from?: string; }, configuration: Configuration, options: any = {}) {
            return OffersApiFp.offerhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Show values of an offer.
         * @param guid 
         */
        offerinfo(params: {  guid: string; }, configuration: Configuration, options: any = {}) {
            return OffersApiFp.offerinfo(params, configuration, options)(fetch, basePath);
        },
        /**
         * Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        offerlink(params: {  request: OfferLinkRequest; }, configuration: Configuration, options: any = {}) {
            return OffersApiFp.offerlink(params, configuration, options)(fetch, basePath);
        },
        /**
         * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        offernew(params: {  request: OfferNewRequest; }, configuration: Configuration, options: any = {}) {
            return OffersApiFp.offernew(params, configuration, options)(fetch, basePath);
        },
        /**
         * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request 
         */
        offerupdate(params: {  request: OfferUpdateRequest; }, configuration: Configuration, options: any = {}) {
            return OffersApiFp.offerupdate(params, configuration, options)(fetch, basePath);
        },
    };
};

