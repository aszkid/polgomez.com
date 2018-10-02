Bitcoin came into existence sometime in 2009. The first wave of crypto-currencies flooded the internet (by some measure or other) not too long after that, and recently a new generation of crypto-currencies finally challenged Bitcoin's long-held throne. Even though proposals like Ethereum and Monero bring substantial new features to the table, they are (mostly) all inspired by Bitcoin's revolutionary solution to the problem of distributed consensus under an assumption of zero-trust.

This series of blog posts are a constructive, step-by-step exposition of the design and implementation of a toy crypto-currency protocol in the systems programming language Rust. The motivations behind this project are twofold. On the one hand, it is an attempt at both providing a technical introduction to crypto-currencies as a whole, and showcasing Rust's potential as a mature language and ecosystem. On the other hand, this is fundamentally an excuse for me trying to grok both crypto-currencies and Rust.

This is *not* an introduction to crypto-currencies from an economic perspective. Our implementation is not only decidedly inflationary; it is also devoid of long-term economic design choices, since the main purpose of this series is to explain *why* and showcase *how* a crypto-currency *a la* Bitcoin succeeds at providing a secure, distributed, and trust-free protocol for consensus. In its most primitive form, this consensus revolves around the *true* or *valid* state of a ledger, and this is what we will implement.

## 1—Bird's eye view
A blockchain system establishes network of 'nodes' which communicate through an agreed-upon protocol or language.

[...]

## 2—Digital identity

A simple ledger consists of a list of transactions, each describing a *debtor* (the person 'sending money'), a *creditor* (the person 'receiving money'), and the *quantity* of money being interchanged. Validating the identity of debtor and creditor is fundamental; else, malicious third-parties can impersonate the creditor and/or debtor in a transaction and steal funds. Bitcoin-like protocols traditionally use asymmetric cryptography as a solution to the problem of digital identity. To each party belongs a keypair: the public key functions as an 'address' or 'account number' for the creditor, and the private key is used by the debtor to sign transactions, thus making sure that impersonation is impossible.

Satoshi Nakamoto chose a specific kind of public-key cryptographic scheme for the Bitcoin protocol: an elliptic curve (`secp256k1`) is used to generate keypairs, and the ECDSA algorithm is used for signing. Our implementation will use the curve `Ed25519` and the newer signing algorithm EdDSA. Among the reasons why, the convenience of a well-written native Rust library ([`ed25519_dalek`](#)) is paramount. In other words, I claim no technical advantages over, say `libsecp256k1`, in terms of security or performance, and at any rate, the end result is essentially the same regardless of the specific curve chosen.

### » Deriving the address from a keypair

The public key in an `Ed25519` keypair is 32 bytes long. Sharing 32 bytes of raw data is A-ok for node-to-node communication, but it is not convenient from a user perspective: writing long strings of HEX-encoded sensitive data is not superb user experience. Bitcoin streamlines referencing public keys by encoding the raw bytes in `base58` <span id="pubk-enc">[[1]](#f-pubk-enc)</span>, which uses a somewhat human-friendly character set (think about typing addresses containing characters like `0OIl1`).

## 3—Transactions



## Footnotes

1. <span id="f-pubk-enc"></span> The specific process is slightly more complicated: to the public key is prefixed a network marker, and then appended the first 4 bytes of its double SHA-256 hash. This whole byte array is `base58`-encoded. Details [here](https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses). [$(\hookleftarrow)$](#pubk-enc).

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/rust.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
<script>hljs.initHighlightingOnLoad();</script>
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$(',')$']]}
  });
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
