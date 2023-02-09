"use client";
import Select from "react-select";
import useSWR from "swr";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModal } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        options={models?.modelOptions}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{ control: (state) => "bg-[#434654] border-[#434654]" }}
        placeholder={model}
        defaultValue={model}
        onChange={(e) => setModal(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
