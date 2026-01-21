import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type AiAnalysisModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: string | null;
  loading: boolean;
};

export function AiAnalysisModal({
  isOpen,
  onClose,
  content,
  loading,
}: AiAnalysisModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>

          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >

            <div className={styles.header}>
              <h2>🤖 Análise Técnica (IA)</h2>

              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>
            
            <div className={styles.content}>
              {loading && <p>Gerando análise técnica...</p>}

              {!loading && content && (
                <div className={styles.markdown}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>
                )}

              {!loading && !content && (
                <p>Nenhuma análise disponível no momento.</p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
