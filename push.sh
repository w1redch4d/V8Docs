files=()
batch_size=15000

# Find and process files
find ../doxyout/html -type f -name "*.png" | while read -r file; do
  cp "$file" ./docs
  files+=("./docs/$(basename "$file")")

  # If batch size is reached, commit and push
  if (( ${#files[@]} >= batch_size )); then
    git add "${files[@]}"
    git commit -m "Added ${batch_size} PNG images"
    git push
    files=() # Reset the array
  fi
done

# Commit remaining files (if any)
if (( ${#files[@]} > 0 )); then
  git add "${files[@]}"
  git commit -m "Added remaining PNG images"
  git push
fi
