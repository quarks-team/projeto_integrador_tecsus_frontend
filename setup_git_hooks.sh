#!/bin/bash

# Path of hooks from git
HOOKS_DIR=".git/hooks"

# Absolut path for the setup_env.sh script
SCRIPT_PATH=$(dirname "$(realpath "$0")")/setup_env.sh

# Conteúdo do hook post-checkout
HOOK_CONTENT="#!/bin/bash

# Verify whether the .env file already exist
if [ ! -f .env ]; then
  echo \".env file not found. Running setup_env.sh.\"
  bash $SCRIPT_PATH \$SONAR_TOKEN
fi
"

# Function to crathe the hook
create_hook() {
  local hook_file=$1
  local hook_content=$2

  echo "$hook_content" > "$HOOKS_DIR/$hook_file"
  chmod +x "$HOOKS_DIR/$hook_file"
}

# Verifying whether the directory of hooks already exist
if [ -d "$HOOKS_DIR" ]; then
  create_hook "post-checkout" "$HOOK_CONTENT"
  echo "Git hook 'post-checkout' has been set up."
else
  echo "Git hooks directory not found. Are you sure this is a Git repository?"
  exit 1
fi
