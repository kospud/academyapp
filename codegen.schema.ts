import type { CodegenConfig } from '@graphql-codegen/cli'

let url = "http://127.0.0.1:4000/graphql";


const config: CodegenConfig = {
    generates: {
        "./schema.graphql": {
            schema: url,
            plugins: ["schema-ast"],
            config: {
                includeDirectives: false
            }
    }
    }
}
export default config