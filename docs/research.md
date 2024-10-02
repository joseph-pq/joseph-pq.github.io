# Research

## Optimizing Photoplethysmography-Based Sleep Staging Models by Leveraging Temporal Context for Wearable Devices Applications

- [PRE-PRINT](https://arxiv.org/abs/2410.00693)
- DOI: https://doi.org/10.48550/arXiv.2410.00693
- [Researchgate](https://www.researchgate.net/publication/384561559_Optimizing_Photoplethysmography-Based_Sleep_Staging_Models_by_Leveraging_Temporal_Context_for_Wearable_Devices_Applications)

Accurate sleep stage classification is crucial for diagnosing sleep disorders and evaluating sleep quality.
While polysomnography (PSG) remains the gold standard, photoplethysmography (PPG) is more practical due to its afford-ability and widespread use in wearable devices.
However, state-of-the-art sleep staging methods often require prolonged continuous signal acquisition, making them impractical for wearable devices due to high energy consumption.
Shorter signal acquisitions are more feasible but less accurate.
Our work proposes an adapted sleep staging model based on top-performing state-of-the-art methods and evaluates its performance with different PPG segment sizes.
We concatenate 30-second PPG segments over 15-minute intervals to leverage longer segment contexts.
This approach achieved an accuracy of 0.75, a Cohen's Kappa of 0.60, an F1-Weighted score of 0.74, and an F1-Macro score of 0.60.
Although reducing segment size decreased sensitivity for deep and REM stages, our strategy outperformed single 30-second window methods, particularly for these stages.
