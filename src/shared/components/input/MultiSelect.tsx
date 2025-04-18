import React, { useState, useRef, useEffect } from "react"

interface Category {
  id: string
  name: string
}

interface MultiSelectProps {
  categories: Category[]
  selected: string[]
  onChange: (selectedIds: string[]) => void
  placeholder?: string
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  categories,
  selected,
  onChange,
  placeholder = "Select categories...",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleOption = (id: string) => {
    onChange(
      selected.includes(id)
        ? selected.filter((sid) => sid !== id)
        : [...selected, id]
    )
  }

  const removeTag = (id: string) => {
    onChange(selected.filter((sid) => sid !== id))
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedItems = categories.filter((c) => selected.includes(c.id))

  return (
    <div className="w-full relative" ref={dropdownRef}>
      {/* Input area */}
      <div
        className="flex flex-wrap items-center gap-2 px-3 py-2 border w-full border-gray-200 rounded-lg focus:border-primary transition-smooth cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedItems.length > 0 ? (
          selectedItems.map((cat) => (
            <span
              key={cat.id}
              className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
            >
              {cat.name}
              <button
                className="ml-1 text-primary hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation()
                  removeTag(cat.id)
                }}
              >
                <i className="ri-close-line"></i>
              </button>
            </span>
          ))
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
        <div className="ml-auto">
          <i className="text-gray-500 ri-arrow-drop-down-line"></i>
        </div>
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="z-40 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-hide">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={selected.includes(category.id)}
                onChange={() => toggleOption(category.id)}
              />
              {category.name}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export { MultiSelect }
