# Annotation Guidelines

## Purpose

Use these rules to review the customer-support message dataset consistently. Assign one primary label based on the customer's main issue or request.

## Allowed labels

| Label | Apply when the main intent concerns | Typical clues |
|---|---|---|
| DELIVERY | Shipping, courier, tracking, delayed or missing parcels | parcel, shipment, tracking, courier, delivery date |
| PAYMENT | Charges, refunds, failed transactions, invoices or payment amounts | charged, deducted, refund, card, UPI, invoice |
| RETURN | Sending an item back, exchanging it, replacement or return pickup | return, exchange, replacement, pickup |
| PRODUCT | Product condition, damage, defect, quality or product specifications | broken, damaged, scratch, quality, incorrect description |
| ACCOUNT | Login, password, verification, profile or account settings | sign in, password, OTP, account, profile |

## Review procedure

1. Read the complete customer message.
2. Identify the main problem or request.
3. Compare that intent with the assigned label.
4. Enter the correct label using the exact uppercase spelling above.
5. Record an issue type and a concise reviewer comment.
6. Flag ambiguous messages instead of guessing.

## Issue types

- **NO ERROR** — the assigned label matches the message.
- **INCORRECT LABEL** — the assigned label does not match the main intent.
- **MISSING LABEL** — the assigned-label field is empty.
- **DUPLICATE ID** — the record ID appears more than once.
- **NEEDS CLARIFICATION** — the message does not provide enough information for a reliable label.

A record may have more than one data-quality issue. For example, a row can have an incorrect label and also share a duplicate ID. Document both where applicable.

## Decision rules

### Choose the primary intent

If a message mentions more than one topic, label the principal problem or request rather than a minor detail.

### Do not infer missing facts

Use only what the message states. If the message is too vague to classify, mark it for clarification and explain what is missing.

### Preserve label consistency

Use only the five approved labels. Do not create alternatives such as SHIPPING, REFUND or LOGIN.

### Handle duplicate IDs transparently

Flag repeated IDs. Keep the original rows in the review copy unless a documented deduplication rule says otherwise. Never remove records silently.

### Write evidence-based comments

Comments should identify the phrase or intent that supports the decision. Keep them short, neutral and specific.

## Reviewer field conventions

- **Correct Label:** one of the five allowed labels, or blank only when clarification is required.
- **Issue Type:** one or more issue types listed above.
- **Reviewer Decision:** ACCEPT when the existing annotation is correct; CORRECT when a change is needed. For unresolved cases, state NEEDS REVIEW.
- **Reviewer Comments:** concise reason for the decision.

## Quality and reporting notes

Calculate label accuracy over records that had an assigned label before review. Report missing annotations separately. Track duplicate IDs separately from label errors so that the same defect is not counted twice without explanation.

All messages in this exercise are synthetic and intended for educational use.
