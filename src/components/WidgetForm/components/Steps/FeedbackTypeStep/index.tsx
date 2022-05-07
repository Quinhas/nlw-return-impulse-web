import { CloseButton } from "@components/CloseButton";
import { FeedbackType, feedbackTypes } from "@components/WidgetForm";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (string: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className={`bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:shadow-md hover:border-brand-500 focus:border-brand-500 focus:outline-none transition-all}`}
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            type="button"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}