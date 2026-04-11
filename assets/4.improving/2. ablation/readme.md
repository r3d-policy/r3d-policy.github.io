\begin{itemize}
    \item Replacing the global feature conditioning with our attention-based spatially aware dense feature conditioning yields a significant performance improvement (Tab.~\ref{tab:ablation_study_new}) and more stable training (Fig.~\ref{fig:diff_conditioning}).
    \item Encoder pretraining is effective, yielding better performance compared to training from scratch (Fig~\ref{fig:pretrain}).
    \item Incorporating auxiliary end-effector (EE) prediction yields a modest improvement in the average success rate.
\end{itemize}