import { type ListItem } from "@/types";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const MarketListItem = ({name, qty, note, purchased}: ListItem) => {
    return (
        <ThemedView>
            <ThemedText>{name}</ThemedText>
            <ThemedText>{qty}</ThemedText>
            <ThemedText>{note}</ThemedText>
            <ThemedText>{purchased ? 'Purchased' : 'Not Purchased'}</ThemedText>
        </ThemedView>
    );
}

export default MarketListItem;
