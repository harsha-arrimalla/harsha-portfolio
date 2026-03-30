export const GET = async () => {
  return Response.json({
    status: "ok",
    agents: ["luffy"],
    runtime: { agents: ["luffy"] },
  });
};
