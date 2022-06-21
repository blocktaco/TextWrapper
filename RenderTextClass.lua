local HttpService = game:GetService('HttpService')
local RenderTextClass = {}

function RenderTextClass.new(Text, Options)
    local RenderTextDataResponse = syn.request({
        Url = '',
        Method = 'POST',
        Headers = {
            ['Content-Type'] = 'application/json'
        },
        Body = HttpService:JSONEncode({
            text = Text,
            options = Options
        })
    })

    if (RenderTextDataResponse.Success) then
        -- Do Drawing
    end
end

return RenderTextClass