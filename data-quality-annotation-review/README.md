# Data Quality & Annotation Review

> **Portfolio project · Beginner · No-code workflow**

A practical quality-assurance exercise for reviewing pre-labelled e-commerce customer-support messages. The reviewer checks label correctness, missing annotations, duplicate record IDs and annotation consistency, then documents findings in a QA summary.

![Project type](https://img.shields.io/badge/Project-Data%20Quality%20%26%20QA-2457A7)
![Level](https://img.shields.io/badge/Level-Beginner-16865B)
![Tools](https://img.shields.io/badge/Tools-Excel%20%7C%20Google%20Sheets-217346)

## Project scenario

An e-commerce team has labelled customer-support messages to prepare data for an AI support workflow. Before the data is used, a quality reviewer must verify that each message has the right category and that the dataset is complete and internally consistent.

All records in this project are **fictional and created for learning**. They do not represent real customers.

## Objectives

- Validate existing text labels against the message intent.
- Identify incorrect and missing annotations.
- Detect duplicate record IDs.
- Apply consistent category definitions.
- Record reviewer decisions and evidence-based comments.
- Summarize quality findings without overstating the results.

## Dataset

The starter dataset contains **41 records** (including a repeated ID) and five allowed categories:

| Label | Meaning |
|---|---|
| `DELIVERY` | Shipping, courier, tracking and delivery status |
| `PAYMENT` | Charges, refunds, invoices and payment transactions |
| `RETURN` | Returns, exchanges, replacements and return pickup |
| `PRODUCT` | Product quality, damage, defects and specifications |
| `ACCOUNT` | Login, password, verification and account settings |

### Files

- [Reviewer exercise dataset](dataset/reviewer-exercise.csv) — work on this file first.
- [Annotation guidelines](docs/annotation-guidelines.md) — category definitions and review rules.
- [QA summary template](reports/qa-summary-template.md) — record metrics and conclusions.
- [Starter Excel workbook](https://github.com/Suman-sky/Portfolio) — use the downloadable workbook attached in the original project conversation for the formatted multi-sheet exercise.

## Workflow

1. Read the annotation guidelines.
2. Review every row in the CSV.
3. Fill the reviewer fields: correct label, issue type, decision and comments.
4. Check for missing labels and duplicate IDs.
5. Calculate label accuracy using only records with an existing assigned label.
6. Complete the QA summary.
7. Verify your work against the answer key in the starter workbook only after your independent review is complete.

## Review fields

| Field | What to enter |
|---|---|
| Correct Label | The category supported by the customer message |
| Issue Type | `NO ERROR`, `INCORRECT LABEL`, `MISSING LABEL`, `DUPLICATE ID` or `NEEDS CLARIFICATION` |
| Reviewer Decision | `ACCEPT` or `CORRECT` |
| Reviewer Comments | Short explanation of the evidence and decision |

For a repeated ID, flag the affected records and document how you handled the duplicate. Do not silently delete a row.

## Quality metrics

**Label accuracy**

`Correct existing labels ÷ records with an assigned label × 100`

**Label error rate**

`Incorrect existing labels ÷ records with an assigned label × 100`

**Missing annotation rate**

`Records with a missing label ÷ total records × 100`

Track duplicate IDs separately as a data-integrity issue. State the denominator used for every percentage.

## Tools

- Microsoft Excel or Google Sheets
- GitHub for versioning and portfolio presentation

No programming is required.

## Current project status

**Starter exercise published.** The dataset is intentionally seeded with annotation issues for practice. Metrics and final conclusions should be added only after the reviewer completes and verifies the exercise.

## Skills demonstrated

Text annotation review · Data validation · Error identification · Label consistency · Duplicate detection · QA documentation · Spreadsheet handling

## Suggested next step

Complete the CSV review, save the reviewed version separately, and add your completed QA summary and screenshots to this repository.

---

*Educational portfolio project. Synthetic data only.*
