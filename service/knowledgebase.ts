import request from "lib/request";

export const knowledgebaseInfo = async (article_list_limit: number) => {
  const { data } = await request.get(
    `/knowledgebase/index?article_list_limit=${article_list_limit}`
  );
  return data;
};

export const articleDetails = async (unique_code: string) => {
  const { data } = await request.get(
    `/knowledgebase/article-details?unique_code=${unique_code}`
  );
  return data;
};

export const supportTicketList = async () => {
  const { data } = await request.get(`/knowledgebase/support-ticket-list`);
  return data;
};

export const supportTicketConversationDetails = async (unique_code: string) => {
  const { data } = await request.get(
    `/knowledgebase/support-ticket-conversation-details?unique_code=${unique_code}`
  );
  return data;
};

export const supportTicketStore = async (payload: any) => {
  const { data } = await request.post(
    `/knowledgebase/support-ticket-conversation-details`,
    payload
  );
  return data;
};

export const supportTicketConversationSend = async (payload: any) => {
  const { data } = await request.post(
    `/knowledgebase/support-ticket-conversation-details`,
    payload
  );
  return data;
};

export const knowledgebaseSupportProjectList = async () => {
  const { data } = await request.get(`/knowledgebase/support-project-list`);
  return data;
};

export const knowledgebaseArticleSearch = async () => {
  const { data } = await request.get(`/knowledgebase/article-search`);
  return data;
};

export const knowledgebaseSupportTicketNoteCreate = async (payload: any) => {
  const { data } = await request.post(
    `/knowledgebase/support-ticket-note-create`,
    payload
  );
  return data;
};
