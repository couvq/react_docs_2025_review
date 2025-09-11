# Checklist when writing React code
## Writing a component
1. Is the component pure/immutable?
a. Does it mind its own business? It should not change any objects or variables that existed before it was called
b. Does it produce the same output given the same inputs?
2. Do event handlers have unintended side effects? If so this could be an issue with event propagation
