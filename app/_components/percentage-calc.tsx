"use client";

import { useState, useCallback, useMemo, memo } from "react";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

// Constants
const INITIAL_AMOUNT = 1;
const INITIAL_TOTAL = 1000;
const MIN_PARTICIPANTS = 2;

// Types
type ParticipantInputProps = {
  index: number;
  amount: number;
  onUpdate: (index: number, value: number) => void;
  onRemove?: () => void;
  showRemove?: boolean;
};

type ResultItemProps = {
  index: number;
  percentage: number;
  amount: number;
};

// Memoized SVG components
const Minus = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
  </svg>
));
Minus.displayName = "Minus";

const Plus = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
));
Plus.displayName = "Plus";

// Components
const ParticipantInput = memo(
  ({
    index,
    amount,
    onUpdate,
    onRemove,
    showRemove,
  }: ParticipantInputProps) => (
    <div className="flex items-center gap-4">
      <div className="flex-1 space-y-2">
        <label className="text-sm font-medium" htmlFor={`participant-${index}`}>
          Participant {index + 1}
        </label>
        <input
          id={`participant-${index}`}
          type="number"
          value={amount}
          onChange={(e) => onUpdate(index, Math.max(0, Number(e.target.value)))}
          aria-label={`Participant ${index + 1} amount`}
          min="0"
          className="flex h-10 w-full rounded-md border border-neutral-300 bg-background px-3 py-2 text-sm ring-neutral-500 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      {showRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove participant"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-neutral-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-neutral-300 h-10 w-10 mt-6 bg-gradient-to-t from-neutral-500 to-neutral-400 shadow-inner shadow-neutral-400 ring-2 hover:opacity-90 active:scale-[0.99] ring-neutral-500 hover:bg-neutral-600 text-white"
        >
          <Minus />
        </button>
      )}
    </div>
  )
);
ParticipantInput.displayName = "ParticipantInput";

const ResultItem = memo(({ index, percentage, amount }: ResultItemProps) => (
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium">Participant {index + 1}</span>
    <NumberFlowGroup>
      <div className="flex items-center gap-2 font-medium">
        <NumberFlow
          value={amount}
          format={{
            style: "currency",
            currency: "Ngn",
          }}
          className=""
        />{" "}
        Each
        {/* <NumberFlow
          value={percentage}
          format={{
            style: "percent",
            maximumFractionDigits: 2,
          }}
          className={`text-sm ${
            Number(percentage) < 0 ? "text-red-400" : "text-green-400"
          }`}
        /> */}
      </div>
    </NumberFlowGroup>
  </div>
));
ResultItem.displayName = "ResultItem";

// Main
export default function PercentageCalculator() {
  const [total, setTotal] = useState<number>(INITIAL_TOTAL);
  const [participants, setParticipants] = useState<number[]>([
    INITIAL_AMOUNT,
    INITIAL_AMOUNT,
  ]);

  // Memoized calculations
  const totalAmount = useMemo(
    () => participants.reduce((acc, amount) => acc + amount, 0),
    [participants]
  );

  const calculations = useMemo(
    () =>
      participants.map((amount) => ({
        percentage: amount / totalAmount,
        amount: (total * amount) / totalAmount,
      })),
    [participants, total, totalAmount]
  );

  // Callbacks
  const addParticipant = useCallback(() => {
    setParticipants((prev) => [...prev, INITIAL_AMOUNT]);
  }, []);

  const removeParticipant = useCallback((index: number) => {
    setParticipants((prev) => {
      if (prev.length <= MIN_PARTICIPANTS) return prev;
      return prev.filter((_, i) => i !== index);
    });
  }, []);

  const updateAmount = useCallback((index: number, value: number) => {
    setParticipants((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }, []);

  const handleTotalChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(0, Number(e.target.value));
      setTotal(value);
    },
    []
  );

  return (
    <div className="min-h-screen p-4 md:p-8 space-y-6 flex flex-col justify-center items-center w-auto">
      <div className="max-w-md mx-auto rounded-lg border shadow-sm w-full">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Percentage Calculator
          </h3>
        </div>
        <div className="space-y-6 p-6 pt-0 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="total-amount">
              Total Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                ₦
              </span>
              <input
                className="flex h-10 w-full rounded-md border border-neutral-300 bg-background px-3 py-2 text-sm ring-neutral-500 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                id="total-amount"
                type="number"
                value={total}
                onChange={handleTotalChange}
                min="0"
              />
            </div>
          </div>

          <div className="space-y-4">
            {participants.map((amount, index) => (
              <ParticipantInput
                key={index}
                index={index}
                amount={amount}
                onUpdate={updateAmount}
                onRemove={() => removeParticipant(index)}
                showRemove={participants.length > MIN_PARTICIPANTS}
              />
            ))}
          </div>

          <button
            onClick={addParticipant}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-neutral-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-neutral-300 h-10 px-4 py-2 w-full bg-gradient-to-t from-neutral-500 to-neutral-400 shadow-inner shadow-neutral-400 ring-2 hover:opacity-90 active:scale-[0.99] ring-neutral-500 hover:bg-neutral-600 text-white"
          >
            <Plus />
            Add Participant
          </button>
        </div>
      </div>

      <div className="w-full rounded-lg border shadow-sm max-w-md mx-auto">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Results
          </h3>
        </div>

        <div className="space-y-4 p-6 pt-0 space-y-4">
          {calculations.map((calc, index) => (
            <ResultItem
              key={index}
              index={index}
              percentage={calc.percentage}
              amount={calc.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
