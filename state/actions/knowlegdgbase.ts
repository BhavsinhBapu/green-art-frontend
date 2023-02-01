import { knowledgebaseInfo } from "service/knowledgebase";

export const getKnowledgebaseInfoAction = async (
  setKnowledgebase: any,
  setLoading: any
) => {
  setLoading(true);
  const Knowledgebase = await knowledgebaseInfo(4);
  setKnowledgebase(Knowledgebase.data);
  setLoading(false);
};
