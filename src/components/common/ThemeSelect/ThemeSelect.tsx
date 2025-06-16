import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ThemeType } from "../../../types/Theme";
import Icon from "../Icon/Icon";
import useTheme from "../../../hooks/useTheme";

const ThemeSelect = () => {
  const { setTheme } = useTheme();

  return (
    <Menu as="div" className="relative z-50">
      <MenuButton className="btn btn-sm btn-ghost">
        <Icon icon={faPaintBrush} className="size-4" />
      </MenuButton>

      <MenuItems className="absolute z-50 right-0 mt-2 w-52 origin-top-right rounded-box bg-base-100 shadow-lg ring-1 ring-black/5 focus:outline-none p-2">
        {Object.values(ThemeType).map((theme) => (
          <MenuItem key={theme} as="div">
            <button
              onClick={() => setTheme(theme)}
              className="w-full text-left px-4 py-2 rounded-md hover:bg-base-200 data-[headlessui-state=active]:bg-base-200"
            >
              <div className="flex items-center gap-2 px-2" data-theme={theme}>
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                <span className="w-3 h-3 rounded-full bg-accent"></span>
                <span className="ml-1">
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </span>
              </div>
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default ThemeSelect;
