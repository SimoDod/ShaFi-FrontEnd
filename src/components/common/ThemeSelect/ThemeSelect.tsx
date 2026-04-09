import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ThemeType } from "../../../types/Theme";
import Icon from "../Icon/Icon";
import useTheme from "../../../hooks/useTheme";

const ThemeSelect = () => {
  const { setTheme } = useTheme();

  return (
    <Menu as="div" className="relative z-50">
      <MenuButton className="btn btn-sm btn-ghost btn-circle transition-all duration-300 hover:bg-base-200/60">
        <Icon icon={faPaintBrush} className="size-3.5" />
      </MenuButton>

      <MenuItems className="absolute z-50 right-0 mt-2 w-52 origin-top-right glass-card-strong rounded-xl p-1.5 max-h-72 overflow-y-auto">
        {Object.values(ThemeType).map((theme) => (
          <MenuItem key={theme} as="div">
            <button
              onClick={() => setTheme(theme)}
              className="w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-base-200/60 data-[headlessui-state=active]:bg-base-200/60"
            >
              <div className="flex items-center gap-2" data-theme={theme}>
                <span className="w-2.5 h-2.5 rounded-full bg-primary ring-1 ring-black/5"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary ring-1 ring-black/5"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent ring-1 ring-black/5"></span>
                <span className="ml-1 text-sm">
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
