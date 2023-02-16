SHELL = /bin/bash
OCP_CONSOLE = $(shell oc whoami --show-console)

.PHONY: e2e-test
# Run Cypress e2e tests using current OpenShift configuration
e2e-test:
	@npx cypress run --e2e -e OCP_CONSOLE=$(OCP_CONSOLE)


