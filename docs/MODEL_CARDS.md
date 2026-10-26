# Model Cards

This file records every model ClearSheaf Search has been tested with: where it comes from, its license, and what was actually measured. Nothing here is a claim of quality or compatibility until a test record is filled in.

## Policy

- Model files are never committed to this repository.
- Models are installed by an explicit user action, never automatically from an API request.
- Record the exact repository, file name, and revision that was tested.
- Verify the license on the model card on the day it is tested and again before each release. A model's license is separate from this project's MIT license, and a quantized conversion can have different terms from the upstream model.
- Mark anything that has not been measured as untested.

## Language models

Candidates are starting points taken from the NobodyWho model-selection documentation. Their status stays untested until a record below is completed.

| Name | Repository and file | Role | License | Status |
|---|---|---|---|---|
| Qwen3 0.6B, Q4_K_M | `NobodyWho/Qwen_Qwen3-0.6B-GGUF` / `Qwen_Qwen3-0.6B-Q4_K_M.gguf` | Smoke test and low-resource profile | Verify on model card | Untested |
| Qwen3 4B, Q4_K_M | `NobodyWho/Qwen_Qwen3-4B-GGUF` / `Qwen_Qwen3-4B-Q4_K_M.gguf` | Higher-quality comparison | Verify on model card | Untested |

Model cards:

- https://huggingface.co/Qwen/Qwen3-0.6B
- https://huggingface.co/NobodyWho/Qwen_Qwen3-0.6B-GGUF
- https://huggingface.co/NobodyWho/Qwen_Qwen3-4B-GGUF

## Embedding model (optional)

| Name | Repository | Role | License | Status |
|---|---|---|---|---|
| all-MiniLM-L6-v2 | `sentence-transformers/all-MiniLM-L6-v2` | Semantic and hybrid search | Apache-2.0 per its model card, re-verify at release | Untested |

Model card: https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2

## Test record template

Copy this section for each model and hardware combination tested.

### Model name and quantization

| Field | Value |
|---|---|
| Date tested | |
| Operating system | |
| Python version | |
| NobodyWho version | |
| Model repository | |
| Model file | |
| Model revision | |
| License at test time | |
| CPU | |
| RAM | |
| GPU and VRAM, or none | |
| GPU acceleration observed | Yes / No |
| Context tokens used | |
| Maximum new tokens | |
| Download size | |
| Model load time | |
| Time to completed answer | |
| Generation speed, if measurable | |
| Approximate peak process RAM | |
| Works offline after download | Yes / No |

Notes on answer quality and evidence-only behavior:

Known problems:
