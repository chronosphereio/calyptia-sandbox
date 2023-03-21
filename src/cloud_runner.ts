const URL = 'https://cloud-lua-sandbox-playground-rztqu7nlcq-uc.a.run.app/jsonrpc';

export async function runFilter(events: any[], code: string) {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: (new Date()).getTime(),
      method: "run",
      params: { events, code }
    })
  })

  const json = await response.json()

  if (json.error) {
    throw new Error(json.error.message)
  }
  return json.result
}
